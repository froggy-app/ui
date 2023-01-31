import AuthGateway from 'pages/AuthGateway';
import Home from 'pages/Home';
import Landing from 'pages/Landing';
import Login from 'pages/Login';
import Register from 'pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const homePath = '/home';
export const loginPath = '/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<Landing />} />
        </Route>

        <Route element={<AuthGateway />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
