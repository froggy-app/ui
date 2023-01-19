import {Button, Column, Input, Row} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useListQuery} from 'redux/apis/random_short_url_api';
import createLink from 'redux/thunks/createLink';

const Home = () => {
  const [linkText, setLinkText] = useState('');

  const dispatch = useDispatch();
  const {data: urlData} = useListQuery({});

  const inputChange = ({value}: {value: string}) => setLinkText(value);

  const create = () => {
    dispatch(createLink({url: linkText}));
  };

  return (
    <>
      <h1>Home</h1>
      <Row>
        <Input onChange={inputChange} />
        <Button label='Shorten' onClick={create} />
      </Row>

      <Column>
        {urlData?.map(({url}: {url: string}, i: number) => (
          <p key={i}>{url}</p>
        ))}
      </Column>
    </>
  );
};

export default Home;
