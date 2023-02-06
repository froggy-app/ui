import {Navigate, Outlet} from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthGateway = () => {
  // Temporary
  const expire = localStorage.getItem('test');
  const loggedIn = true;
  console.log(expire);
  console.log('checking for auth');
  console.log(Cookies.get('jwt'));

  return loggedIn ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default AuthGateway;
