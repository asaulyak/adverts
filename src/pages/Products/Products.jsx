import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors.js';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/operations.js';
import { Button } from '../../components/Button/Button.jsx';
import { ProductList } from '../../components/ProductList/ProductList.jsx';

function Products() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page }));
  }, [dispatch, page]);

  const products = useSelector(selectProducts);

  const handleLoadMoreClick = () => setPage(currentPage => currentPage + 1);

  return (
    <>
      <ProductList products={products} />

      <Button variant="light" onClick={handleLoadMoreClick}>Load more</Button>
    </>
  );
}

export default Products;
