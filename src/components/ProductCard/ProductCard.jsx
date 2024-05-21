import css from './ProductCard.module.css';
import { useMemo } from 'react';
import { Button } from '../Button/Button.jsx';
import { ProductTags } from '../ProductTags/ProductTags.jsx';
import { FavoriteProduct } from '../FavoriteProduct/FavoriteProduct.jsx';
import { ProductPrice } from '../ProductPrice/ProductPrice.jsx';

export const ProductCard = ({ product, openModal }) => {
  const image = useMemo(() => product.gallery[0], [product]);

  const handleShowMoreClick = () => {
    openModal(product);
  };

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt={product.name} />
      </div>
      <div className={css.info}>
        <div className={css.title}>
          <div className={css.name}>{product.name}</div>
          <ProductPrice product={product} />
          <FavoriteProduct product={product} />
        </div>

        <div className={css.details}>
          <div className={css.rating}>
            <svg width="16" height="16" className={css.star}>
              <use href="./icons.svg#icon-star"></use>
            </svg>
            {product.rating}
            {!!product.reviews.length && (
              <>({product.reviews.length} Reviews)</>
            )}
          </div>
          <div className={css.location}>
            <svg width="16" height="16">
              <use href="./icons.svg#icon-map-pin"></use>
            </svg>
            {product.location}
          </div>
        </div>

        <div className={css.description}>{product.description}</div>

        <div className={css.tags}>
          <ProductTags product={product} />
        </div>

        <Button onClick={handleShowMoreClick}>Show more</Button>
      </div>
    </div>
  );
};
