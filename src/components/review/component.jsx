import { useContext } from "react";
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../context/user";

export const Review = ({review}) => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {review.map(({text}) => (
          <li>{text}</li>
        ))}
      </ul>
      {user && <ReviewForm/>}
    </div>
  );
};