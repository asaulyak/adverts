import css from './FilterLocation.module.css';
import { useDispatch } from 'react-redux';
import { setLocationFilter } from '../../redux/filters.slice.js';

export const FilterLocation = () => {
  const dispatch = useDispatch();

  const handleInputChange = event =>
    dispatch(setLocationFilter(event.target.value));

  return (
    <div className={css.location}>
      <svg width="18" height="20" className={css.icon}>
        <use href="./icons.svg#icon-map-pin"></use>
      </svg>
      <input className={css.input} type="text" onChange={handleInputChange} />
    </div>
  );
};
