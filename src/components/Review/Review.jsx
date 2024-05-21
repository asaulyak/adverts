import css from './Review.module.css';
import clsx from 'clsx';
import { useMemo } from 'react';

export const Review = ({ review }) => {
  const stars = useMemo(
    () =>
      Array.apply(null, new Array(5)).map((_, i) => (
        <svg
          key={i}
          className={clsx({
            [css.star]: true,
            [css.yellow]: i < review.reviewer_rating,
          })}
          width="16"
          height="16"
          stroke="red"
          fill="red"
        >
          <use href="./icons.svg#icon-star"></use>
        </svg>
      )),
    [review]
  );

  return (
    <div className={css.review}>
      <div className={css.title}>
        <div className={css.avatar}>
          {review.reviewer_name.slice(0, 1).toUpperCase()}
        </div>
        <div className={css.rating}>
          <div className={css.name}>{review.reviewer_name}</div>
          <div className={css.stars}>{stars}</div>
        </div>
      </div>
      <div className={css.comment}>{review.comment}</div>
    </div>
  );
};
