import { NumericFormat } from 'react-number-format';

export const ProductPrice = ({product}) => (
  <NumericFormat
    value={product.price}
    suffix=".00"
    displayType="text"
    prefix="€"
  />
);
