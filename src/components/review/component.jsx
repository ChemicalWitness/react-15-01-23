import { ReviewForm } from "../review-form/component";

export const Review = ({review}) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {review.map(({text}) => (
          <li>{text}</li>
        ))}
      </ul>
      <ReviewForm/>
    </div>
  );
};