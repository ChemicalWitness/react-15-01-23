import { Button } from '../button/component';
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Button>Menu</Button>
        <Button>Log In</Button>
      </div>
    </header>
  );
};