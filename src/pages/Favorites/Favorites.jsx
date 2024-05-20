import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/operations.js';
import { selectFavoriteProducts } from '../../redux/selectors.js';
import { ProductList } from '../../components/ProductList/ProductList.jsx';
import { resetFilters } from '../../redux/filters.slice.js';
import css from './Favorites.module.css';

function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(
      fetchProducts({
        page: 1,
        limit: 20,
      })
    );
  }, [dispatch]);

  const products = useSelector(selectFavoriteProducts);

  return (
    <div className={css.page}>
      <div className={css.main}>
        {products.length ? (
          <ProductList products={products} />
        ) : (
          <h3 style={{ alignSelf: 'center', padding: '64px 0' }}>
            No products found
          </h3>
        )}
      </div>
    </div>
  );
}

export default Favorites;
