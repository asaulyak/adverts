import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { lazy } from 'react';

const Products = lazy(() => import('./pages/Products/Products.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
