import {Navigate, Outlet} from 'react-router-dom';

const AuthGateway = () => {
  // Temporary
  const loggedIn = true;
  console.log('checking for auth');

  return loggedIn ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default AuthGateway;
