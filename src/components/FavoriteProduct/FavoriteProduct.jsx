import css from './FavoriteProduct.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites.slice.js';
import { selectFavoriteIds } from '../../redux/selectors.js';

export const FavoriteProduct = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = useSelector(selectFavoriteIds);

  useEffect(() => {
    setIsFavorite(favorites.includes(product.id));
  }, [product, favorites]);

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product.id));
    }

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
