import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import css from './Layout.module.css';

export const Layout = () => (
  <>
    <Suspense fallback={<Loader />}>
      <div className={css.container}>
        <Outlet />
      </div>
    </Suspense>
  </>
);
