import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const Review = ({review}) => {
  return (
    <>
      {review.text}
    </>
  );
};