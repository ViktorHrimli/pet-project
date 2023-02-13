import { Outlet } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';
import Footer from 'components/footer/Footer';
export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
