import { ProductPrice } from '../ProductPrice/ProductPrice.jsx';
import css from './ProductModalContent.module.css';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { ProductTags } from '../ProductTags/ProductTags.jsx';
import { Review } from '../Review/Review.jsx';
import { BookForm } from '../BookForm/BookForm.jsx';

export const ProductModalContent = ({ product }) => {
  const gallery = useMemo(() => product.gallery.slice(0, 3), [product]);

  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const handleTabClick = tab => setActiveTab(tab);

  return (
    <div className={css.modal}>
      <div className={css.title}>{product.name}</div>
      <div className={css.info}>
        <div className={css.rating}>
          <img src="/Rating.png" alt="rating" />
          {product.rating}
          {!!product.reviews.length && <>({product.reviews.length} Reviews)</>}
        </div>
        <div className={css.location}>
          <svg width="16" height="16">
            <use href="/icons.svg#icon-map-pin"></use>
          </svg>
          {product.location}
        </div>
      </div>
      <div className={css.price}>
        <ProductPrice product={product} />
      </div>
      <div className={css.gallery}>
        {gallery.map(item => (
          <img className={css.image} key={item} src={item} alt="gallery" />
        ))}
      </div>

      <div className={css.description}>{product.description}</div>

      <div className={css.tabs}>
        <div
          onClick={() => handleTabClick('features')}
          className={clsx({
            [css.tab]: true,
            [css.active]: activeTab === 'features',
          })}
        >
          Features
        </div>
        <div
          onClick={() => handleTabClick('reviews')}
          className={clsx({
            [css.tab]: true,
            [css.active]: activeTab === 'reviews',
          })}
        >
          Reviews
        </div>
      </div>

      <div
        className={clsx({
          [css.content]: true,
          [css.hidden]: activeTab !== 'features',
        })}
      >
        <div className={css.features}>
          <div className={css.tags}>
            <ProductTags product={product} />
          </div>

          <div className={css.title}>Vehicle details</div>

          <div className={css.table}>
            <div className={css.cell}>
              <div>Form</div>
              <div>{product.form}</div>
            </div>
            <div className={css.cell}>
              <div>Length</div>
              <div>{product.length}</div>
            </div>
            <div className={css.cell}>
              <div>Width</div>
              <div>{product.width}</div>
            </div>
            <div className={css.cell}>
              <div>Height</div>
              <div>{product.height}</div>
            </div>
            <div className={css.cell}>
              <div>Tank</div>
              <div>{product.tank}</div>
            </div>
            <div className={css.cell}>
              <div>Consumption</div>
              <div>{product.consumption}</div>
            </div>
          </div>
        </div>
        <div className={css.form}>
          <BookForm />
        </div>
      </div>
      <div
        className={clsx({
          [css.content]: true,
          [css.hidden]: activeTab !== 'reviews',
        })}
      >
        <div className={css.reviews}>
          {product.reviews.map(review => (
            <Review key={review.reviewer_name} review={review} />
          ))}
        </div>
        <div className={css.form}>
          <BookForm />
        </div>
      </div>
    </div>
  );
};
