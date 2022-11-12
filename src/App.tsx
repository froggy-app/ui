import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const homePath = '/home';
export const loginPath = '/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
