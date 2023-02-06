import {Navigate, Outlet} from 'react-router-dom';

export const TOKEN_KEY = 'tokenExpire';

const AuthGateway = () => {
  const expire: string | null = localStorage.getItem(TOKEN_KEY);

  if (expire != null) {
    const expireTime = new Date(expire);
    const currentTime = new Date();

    if (expireTime > currentTime) {
      // Navigate to the given route
      return <Outlet />;
    } else {
      // Remove the expired date
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  // Navigate to the login page
  return <Navigate to={'/login'} replace />;
};

export default AuthGateway;
