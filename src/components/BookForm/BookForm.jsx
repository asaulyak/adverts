import css from './BookForm.module.css';
import { Button } from '../Button/Button.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react'

export const BookForm = () => {
  const [date, setDate] = useState(null);

  const handleChange = (date) => {
    setDate(date);
  };

  const handleSubmit = event => {
    event.preventDefault();
    window.location.reload();
  };


  return (
    <>
      <div className={css.title}>Book your campervan now</div>
      <div className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </div>
      <form onSubmit={handleSubmit}>
        <div className={css.fields}>
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label htmlFor="date">
            <div className={css.datepicker}>
              <DatePicker
                required={true}
                placeholderText="Booking date"
                showIcon={true}
                selected={date}
                onChange={handleChange}
                calendarIconClassname={css.icon}
                icon={
                  <svg width="20" height="20">
                    <use href="./icons.svg#icon-calendar"></use>
                  </svg>
                }
              ></DatePicker>
            </div>
          </label>
          <label htmlFor="comment">
            <textarea
              name="comment"
              cols="30"
              rows="10"
              placeholder="Comment"
            ></textarea>
          </label>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
