import classNames from "classnames";
import { useReviewForm } from "./use-review-form";

import styles from './styles.module.scss';


export const ReviewForm = () => {
  const {form, setName, setText, setRating} = useReviewForm();

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.field)}>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" value={form.name} onChange={setName} />
      </div>
      <div className={classNames(styles.field)}>
        <label htmlFor="text">Текст</label>
        <input id="text" type="text" value={form.text} onChange={setText} />
      </div>
      <div className={classNames(styles.field)}>
        <label htmlFor="rating">Рейтинг</label>
        <input id="rating" type="number" min="0" max="5" value={form.rating} onChange={setRating} />
      </div>
    </div>
  );
};