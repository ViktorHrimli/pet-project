import { ROUTES, ROUTES_CATEGORY_NAMES, ROUTES_PARAMS } from 'constants/routes';
import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { fetchCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { Loader } from 'components/loader/Loader';
import { SharedLayout } from './sharedLayout/SharedLayout';

const HomePage = React.lazy(() => import('pages/homePage/HomePage.js'));
const RegisterPage = lazy(() => import('../pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const NewsPage = lazy(() => import('../pages/newsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/noticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/ourFriendsPage/OurFriendsPage')
);
const UserPage = lazy(() => import('../pages/userPage/UserPage'));

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    {isRefreshing
        ? <Loader />
        : <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path={ROUTES.news} element={<NewsPage />} />

          <Route path={`${ROUTES.notices}`}>
            <Route
              index
              element={
                <Navigate replace to={`${ROUTES_CATEGORY_NAMES.sell}`} />
              }
            />
            <Route
              path={`:${ROUTES_PARAMS.categoryName}`}
              element={<NoticesPage />}
            />
          </Route>

          <Route path={ROUTES.friends} element={<OurFriendsPage />} />

          <Route
            path={ROUTES.register}
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />

          <Route
            path={ROUTES.login}
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />

          <Route
            path={ROUTES.user}
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.home} />} />
      </Routes>}
    </>
  );
};

export default App;
