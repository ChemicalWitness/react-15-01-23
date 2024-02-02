import { useReviewForm } from "./use-review-form";


export const ReviewForm = () => {
  const {form, setName, setText, setRating} = useReviewForm();

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={form.name} onChange={setName} />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input id="text" type="text" value={form.text} onChange={setText} />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input id="rating" type="number" min="0" max="5" value={form.rating} onChange={setRating} />
      </div>
    </div>
  );
};