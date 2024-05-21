import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredProducts,
  selectFilterSearchParams,
  selectProductsLoading,
} from '../../redux/selectors.js';
import { useEffect, useState } from 'react';
import { fetchProducts, fetchProductsRange } from '../../redux/operations.js';
import { Button } from '../../components/Button/Button.jsx';
import { ProductList } from '../../components/ProductList/ProductList.jsx';
import { Filters } from '../../components/Filters/Filters.jsx';
import css from './Products.module.css';
import {
  setPagination,
  updateSearchParams,
} from '../../redux/filters.slice.js';
import { Loader } from '../../components/Loader/Loader.jsx';

function Products() {
  const dispatch = useDispatch();

  const filterParams = useSelector(selectFilterSearchParams);
  const products = useSelector(selectFilteredProducts);
  const isLoading = useSelector(selectProductsLoading);

  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [fullListReload, setFullListReload] = useState(true);

  useEffect(() => {
    if (filterParams.page === 1) {
      dispatch(fetchProducts(filterParams));
      setFullListReload(true);
    } else {
      dispatch(fetchProductsRange(filterParams));
      setFullListReload(false);
    }
  }, [dispatch, filterParams]);

  useEffect(() => {
    const { page, limit } = filterParams;
    setHasMoreProducts(!!products.length && products.length >= page * limit);
  }, [products, filterParams]);

  const handleLoadMoreClick = () => {
    dispatch(setPagination({ page: filterParams.page + 1 }));
    dispatch(updateSearchParams());
  };

  return (
    <div className={css.page}>
      <div className={css.filters}>
        <Filters />
      </div>
      <div className={css.main}>
        {isLoading && fullListReload ? (
          <Loader />
        ) : products.length ? (
          <ProductList products={products} />
        ) : (
          <h3 style={{ alignSelf: 'center', padding: '64px 0' }}>
            No products found
          </h3>
        )}

        {hasMoreProducts && (
          <Button
            variant="light"
            onClick={handleLoadMoreClick}
            style={{ alignSelf: 'center' }}
            disabled={isLoading && !fullListReload}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
}

export default Products;
