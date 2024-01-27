import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from './styles.module.scss';

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        {children}
      </main>
      <Footer />
    </>
  );
};