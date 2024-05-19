import css from './FavoriteProduct.module.css';
import { useEffect, useState } from 'react';
import { storage } from '../../common/storage/storage.js';
import clsx from 'clsx';

export const FavoriteProduct = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = storage.get('favorites') || [];

    setIsFavorite(favorites.includes(product.id));
  }, [product]);

  const toggleFavorite = () => {
    let favorites = storage.get('favorites') || [];

    if (isFavorite) {
      favorites = favorites.filter(item => item !== product.id);
    } else {
      favorites.push(product.id);
    }

    storage.set('favorites', favorites);

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.heart} onClick={toggleFavorite}>
      <svg
        width="25"
        height="22"
        className={clsx({
          [css.active]: isFavorite,
          [css.inactive]: !isFavorite,
        })}
      >
        <use href="/icons.svg#icon-heart"></use>
      </svg>
    </div>
  );
};
