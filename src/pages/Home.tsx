import {Button, Input, Row} from '@froggy-app/lilypad';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import createLink from 'redux/thunks/createLink';

const Home = () => {
  const [linkText, setLinkText] = useState('');

  const dispatch = useDispatch();

  const inputChange = ({value}: {value: string}) => setLinkText(value);

  console.log(linkText);

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
    </>
  );
};

export default Home;
