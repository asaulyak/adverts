import { FilterEquipment } from '../FilterEquipment/FilterEquipment.jsx';
import css from './Filters.module.css';
import { FilterType } from '../FilterType/FilterType.jsx';
import { FilterLocation } from '../FilterLocation/FilterLocation.jsx';
import { Button } from '../Button/Button.jsx';
import { useDispatch } from 'react-redux';
import {
  setPagination,
  updateSearchParams,
} from '../../redux/filters.slice.js';
import { useEffect } from 'react';

export const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchParams());
  }, [dispatch]);

  const handleSearchClick = () => {
    dispatch(setPagination({ page: 1 }));
    dispatch(updateSearchParams());
  };
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

      <Button onClick={handleSearchClick}>Search</Button>
    </>
  );
};
