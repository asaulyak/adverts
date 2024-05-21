import { Tag } from '../Tag/Tag.jsx';
import css from './ProductTags.module.css';

export const ProductTags = ({ product }) => (
  <div className={css.tags}>
    <Tag>
      <svg width="24" height="14">
        <use href="/icons.svg#icon-adults"></use>
      </svg>
      {product.adults} adults
    </Tag>
    <Tag>
      <svg width="17" height="18">
        <use href="/icons.svg#icon-transmission"></use>
      </svg>
      {product.transmission}
    </Tag>

    <Tag>
      <svg width="15" height="16">
        <use href="/icons.svg#icon-petrol"></use>
      </svg>
      {product.engine}
    </Tag>

    <Tag>
      <svg width="14" height="18">
        <use href="/icons.svg#icon-kitchen"></use>
      </svg>
      {product.details.kitchen} kitchen
    </Tag>

    <Tag>
      <svg width="20" height="20">
        <use href="/icons.svg#icon-bed"></use>
      </svg>
      {product.details.beds} beds
    </Tag>

    {!!product.details.airConditioner && (
      <Tag>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-air-conditioner"></use>
        </svg>
        {product.details.airConditioner} air conditioner
      </Tag>
    )}

    {!!product.details.CD && (
      <Tag>
        <svg width="18" height="18">
          <use href="/icons.svg#icon-cd"></use>
        </svg>
        CD
      </Tag>
    )}

    {!!product.details.TV && (
      <Tag>
        <svg width="18" height="18">
          <use href="/icons.svg#icon-tv"></use>
        </svg>
        TV
      </Tag>
    )}

    {!!product.details.radio && (
      <Tag>
        <svg width="18" height="18">
          <use href="/icons.svg#icon-radio"></use>
        </svg>
        radio
      </Tag>
    )}

    {!!product.details.hob && (
      <Tag>
        <svg width="20" height="15">
          <use href="/icons.svg#icon-hob"></use>
        </svg>
        {product.details.hob} hob
      </Tag>
    )}

    {!!product.details.toilet && (
      <Tag>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-toilet"></use>
        </svg>
        toilet
      </Tag>
    )}

    {!!product.details.shower && (
      <Tag>
        <svg width="16" height="16">
          <use href="/icons.svg#icon-shower"></use>
        </svg>
        shower
      </Tag>
    )}

    {!!product.details.freezer && (
      <Tag>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-freezer"></use>
        </svg>
        freezer
      </Tag>
    )}

    {!!product.details.gas && (
      <Tag>
        <svg width="14" height="17">
          <use href="/icons.svg#icon-gas"></use>
        </svg>
        gas
      </Tag>
    )}

    {!!product.details.water && (
      <Tag>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-water"></use>
        </svg>
        water
      </Tag>
    )}

    {!!product.details.microwave && (
      <Tag>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-microwave"></use>
        </svg>
        microwave
      </Tag>
    )}
  </div>
);
