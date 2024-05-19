import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors.js';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/operations.js';

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
