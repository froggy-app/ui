import {Button, Column, Input, Row} from '@froggy-app/lilypad';
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
    <>
      <h1>Home</h1>
      <Row>
        <Input onChange={inputChange} />
        <Button label='Shorten' onClick={create} />
      </Row>

      <Column>
        {urlData?.map(
          ({id, url, code}: {id: string; url: string; code: string}) => (
            <p key={id}>{`${url} - https://froggy.app/s/${code}`}</p>
          )
        )}
      </Column>
    </>
  );
};

export default Home;
