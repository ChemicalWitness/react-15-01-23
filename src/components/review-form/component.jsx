import classNames from "classnames";
import { INITIAL_STATE, useReviewForm } from "./use-review-form";
import {Button} from '../button/component'

import styles from './styles.module.scss';
import { useCreateReviewMutation } from "../../redux/services/api";


export const ReviewForm = ({restaurantId}) => {
  const {form, setName, setText, setRating} = useReviewForm(INITIAL_STATE);

  const [createReview, {isLoading}] = useCreateReviewMutation()

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
      <Button className={styles.submit} onClick={() => createReview({
        restaurantId,
        newReview: {
          user:"a304959a-76c0-4b34-954a-b38dbf310360",
          text: form.text,
          rating: form.rating,
        }
        })}>Submit</Button>
    </div>
  );
};