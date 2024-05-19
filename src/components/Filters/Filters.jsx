import { FilterEquipment } from '../FilterEquipment/FilterEquipment.jsx';
import css from './Filters.module.css';
import { FilterType } from '../FilterType/FilterType.jsx';
import { FilterLocation } from '../FilterLocation/FilterLocation.jsx';

export const Filters = () => {
  return (
    <>
      <div className={css.location}>
        <div className={css.title}>Location</div>
        <FilterLocation />
      </div>

      <div className={css.title}>Filters</div>
      <div className={css.filters}>
        <FilterEquipment />
        <FilterType />
      </div>
    </>
  );
};
