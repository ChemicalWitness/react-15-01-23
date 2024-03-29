import { useContext } from "react";
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../context/user";
import { Review } from "../review/component";
import { ReviewContainer } from "../review/container";

export const Reviews = ({reviewIds}) => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <ReviewContainer reviewId={id}/>
          </li>
        ))}
      </ul>
      {user && <ReviewForm/>}
    </div>
  );
};