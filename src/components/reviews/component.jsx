import { useContext } from "react";
import { ReviewForm } from "../review-form/component";
import { UserContext } from "../../context/user";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { Review } from "../review/component";

export const Reviews = ({reviewIds}) => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <Review reviewId={id}/>
          </li>
        ))}
      </ul>
      {user && <ReviewForm/>}
    </div>
  );
};