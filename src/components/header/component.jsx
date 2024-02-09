import { useContext } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss'
import { UserContext } from '../../context/user';
import { Login } from '../login/component';

export const Header = () => {
const {user, setUser} = useContext(UserContext)

  return (
    <header className={styles.header}>
      <Button>Menu</Button>
      <p>Привет, {user ? user.name : 'Гость'}</p>
      <Login setUser={setUser}/>
    </header>
  );
};