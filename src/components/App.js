import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './sharedLayout/SharedLayout';

const RegisterPage = lazy(() => import('../pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const NewsPage = lazy(() => import('../pages/newsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/noticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/ourFriendsPage/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/userPage/UserPage'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<NewsPage />}/>
          <Route path='/news' element={<NewsPage />}/>
          <Route path='/notices' element={<NoticesPage />}/>
          <Route path='/notices/:categoryName' element={<NewsPage />}/>
          <Route path='/friends' element={<OurFriendsPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/user' element={<UserPage />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;