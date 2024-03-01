import { useContext } from "react";
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../context/user";
import { ReviewContainer } from "../review/container";

export const Reviews = ({reviews, restaurantId}) => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <ReviewContainer review={review}/>
          </li>
        ))}
      </ul>
      {user && <ReviewForm restaurantId={restaurantId}/>}
    </div>
  );
};