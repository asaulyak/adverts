import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import css from './Layout.module.css';
import Modal from 'react-modal';

export const Layout = () => {
  Modal.setAppElement('#modal-placeholder');
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
