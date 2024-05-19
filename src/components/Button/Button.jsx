import css from './Button.module.css';
import clsx from 'clsx'

export const Button = ({ children, onClick, variant }) => (
  <button className={clsx(
    [css.button, css[variant]]
  )} onClick={onClick}>
    {children}
  </button>
);
