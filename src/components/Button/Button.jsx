import css from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ children, onClick, variant, style, disabled, type = 'button' }) => (
  <button
    type={type}
    disabled={disabled}
    style={style}
    className={clsx([css.button, css[variant]])}
    onClick={onClick}
  >
    {children}
  </button>
);
