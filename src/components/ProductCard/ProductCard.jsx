import css from './ProductCard.module.css';
import { useMemo } from 'react';
import { NumericFormat } from 'react-number-format';
import { Button } from '../Button/Button.jsx';
import { ProductTags } from '../ProductTags/ProductTags.jsx';
import { FavoriteProduct } from '../FavoriteProduct/FavoriteProduct.jsx';

export const ProductCard = ({ product }) => {
  const image = useMemo(() => product.gallery[0], [product]);

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt={product.name} />
      </div>
      <div className={css.info}>
        <div className={css.title}>
          <div className={css.name}>{product.name}</div>
          <NumericFormat
            value={product.price}
            suffix=".00"
            displayType="text"
            prefix="€"
          />
          <FavoriteProduct product={product} />
        </div>

        <div className={css.details}>
          <div className={css.rating}>
            <img src="/Rating.png" alt="rating" />
            {product.rating}
            {!!product.reviews.length && (
              <>({product.reviews.length} Reviews)</>
            )}
          </div>
          <div className={css.location}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-map-pin"></use>
            </svg>
            {product.location}
          </div>
        </div>

        <div className={css.description}>{product.description}</div>

        <div className={css.tags}>
          <ProductTags product={product} />
        </div>

        <Button>Show more</Button>
      </div>
    </div>
  );
};
