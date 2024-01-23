import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from './styles.module.scss';

export const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.wrapper}>{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
};