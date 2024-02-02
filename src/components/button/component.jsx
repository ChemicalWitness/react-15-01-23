import classNames from 'classnames'
import styles from './styles.module.scss'

export const Button = ({children, onClick, disabled, className}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(styles.button, className) }>{children}</button>
  );
};