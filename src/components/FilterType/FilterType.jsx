import css from './FilterType.module.css';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setTypeFilter } from '../../redux/filters.slice.js';

export const FilterType = () => {
  const types = useMemo(
    () => [
      {
        name: 'van',
        title: 'Van',
        icon: 'van',
      },
      {
        name: 'fully-integrated',
        title: 'Integrated',
        icon: 'integrated',
      },
      {
        name: 'alcove',
        title: 'Alcove',
        icon: 'alcove',
      },
    ],
    []
  );

  const dispatch = useDispatch();

  const handleOptionChange = option => dispatch(setTypeFilter(option.name));

  return (
    <>
      <div className={css.title}>Vehicle type</div>
      <div className={css.options}>
        {types.map(item => (
          <label
            key={item.name}
            className={css.option}
            onChange={() => handleOptionChange(item)}
          >
            <input type="radio" name="type" value={item.name} />
            <svg width="40" height="29">
              <use href={`./icons.svg#icon-${item.icon}`}></use>
            </svg>
            {item.title}
          </label>
        ))}
      </div>
    </>
  );
};

const t = [];
