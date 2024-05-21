import css from './FilterEquipment.module.css';
import { useDispatch } from 'react-redux';
import { equipmentFilters } from '../../common/filters/equipment-filters.js';
import { setEquipmentFilter } from '../../redux/filters.slice.js';

export const FilterEquipment = () => {
  const dispatch = useDispatch();

  const handleOptionChange = (event, option) => {
    dispatch(
      setEquipmentFilter({
        active: event.target.checked,
        filter: option.name,
      })
    );
  };

  return (
    <>
      <div className={css.title}>Vehicle equipment</div>
      <div className={css.options}>
        {equipmentFilters.map(item => (
          <label
            key={item.name}
            className={css.option}
            onChange={event => handleOptionChange(event, item)}
          >
            <input type="checkbox" name={item.name} />
            <svg width="32" height="32">
              <use href={`./icons.svg#icon-${item.icon}`}></use>
            </svg>
            {item.title}
          </label>
        ))}
      </div>
    </>
  );
};
