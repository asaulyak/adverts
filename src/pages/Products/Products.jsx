import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../redux/selectors.js';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/operations.js';
import { Button } from '../../components/Button/Button.jsx';
import { ProductList } from '../../components/ProductList/ProductList.jsx';
import { Filters } from '../../components/Filters/Filters.jsx';
import css from './Products.module.css';

function Products() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page }));
  }, [dispatch, page]);

  const products = useSelector(selectFilteredProducts);

  const handleLoadMoreClick = () => setPage(currentPage => currentPage + 1);

  return (
    <div className={css.page}>
      <div className={css.filters}>
        <Filters />
      </div>
      <div className={css.main}>
        {products.length ? (
          <ProductList products={products} />
        ) : (
          <h3 style={{ alignSelf: 'center', padding: '64px 0' }}>No products found</h3>
        )}

        <Button
          variant="light"
          onClick={handleLoadMoreClick}
          style={{ alignSelf: 'center' }}
        >
          Load more
        </Button>
      </div>
    </div>
  );
}

export default Products;
