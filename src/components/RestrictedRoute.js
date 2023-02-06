import { ROUTES } from 'constants/routes';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (token) {
    return (
      <Navigate to={'/' + ROUTES.user} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};

export default RestrictedRoute;

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   const location = useLocation();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// export default RestrictedRoute;
