import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { ROUTES } from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={'/' + ROUTES.login} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
