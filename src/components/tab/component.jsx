import classNames from "classnames";
import { Button } from "../button/component"
import styles from './styles.module.scss'

export const Tab = ({title, onClick}) => {
  return (
    <Button onClick={onClick} className={classNames(styles.tab)}>
      {title}
    </Button>
  );
};