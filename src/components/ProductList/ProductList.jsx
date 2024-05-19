import css from './ProductList.module.css';
import { ProductCard } from '../ProductCard/ProductCard.jsx';

export const ProductList = ({ products }) => (
  <ul className={css.products}>
    {products.map(product => (
      <li key={product.id}>
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);
