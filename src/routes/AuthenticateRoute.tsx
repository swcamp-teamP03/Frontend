import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { getAccessToken } from '../api/index';

const AuthenticateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const token = getAccessToken();

  if (isAuthenticated) {
    return token ? <Layout router={<Outlet />} /> : <Navigate to="/auth" />;
  } else {
    return token ? <Navigate to="/" /> : <Outlet />;
  }
};

export default AuthenticateRoute;
