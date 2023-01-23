import {Button, Column, Input, Row, Container} from '@froggy-app/lilypad';
import {useState} from 'react';
import {
  useCreateLinkMutation,
  useListLinksQuery,
} from 'redux/apis/random_short_url_api';

const Home = () => {
  const [linkText, setLinkText] = useState('');

  const [createLink] = useCreateLinkMutation();
  const {data: urlData} = useListLinksQuery();

  const inputChange = ({value}: {value: string}) => setLinkText(value);

  const create = () => {
    createLink({url: linkText});
  };

  return (
    <Container className='mx-md'>
      <h1 className='my-md'>Home</h1>

      <Row justifyContent='center'>
        <Container width='clamp(100px, 50vw, 500px)'>
          <Row justifyContent='center'>
            <p className='pb-sm'>Enter a link to shorten</p>
          </Row>
          <Row>
            <Input onChange={inputChange} onSubmit={create} />
            <Button label='Shorten' onClick={create} className='ml-xs' />
          </Row>
        </Container>
      </Row>

      <h2 className='mt-lg mb-sm'>My Links</h2>
      <Row>
        <Container className='mr-md'>
          <Column>
            <h3 className='mb-sm'>Link</h3>
            {urlData?.map(({id, url}: {id: string; url: string}) => (
              <a
                target='_blank'
                rel='noreferrer'
                className='mb-sm'
                href={url}
                key={`${id}-link`}
              >
                {url}
              </a>
            ))}
          </Column>
        </Container>
        <Container className='mr-md'>
          <Column>
            <h3 className='mb-sm'>Froggy Link</h3>
            {urlData?.map(({id, code}: {id: string; code: string}) => (
              <a
                target='_blank'
                rel='noreferrer'
                className='mb-sm'
                href={`https://froggy.app/s/${code}`}
                key={`${id}-froggy-link`}
              >{`https://froggy.app/s/${code}`}</a>
            ))}
          </Column>
        </Container>
      </Row>
    </Container>
  );
};

export default Home;
