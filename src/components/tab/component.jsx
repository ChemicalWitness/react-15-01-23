import classNames from "classnames";
import { Button } from "../button/component"
import styles from './styles.module.scss'

export const Tab = ({title, onSelect}) => {
  return (
    <Button onClick={onSelect} className={classNames(styles.tab)}>
      {title}
    </Button>
  );
};