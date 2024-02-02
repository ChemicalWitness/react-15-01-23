import { useReducer } from "react";

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 1,
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "setName":
      return {
        ...INITIAL_STATE,
        name: payload
      }
    case "setText":
      return {
        ...state,
        text: payload
      }
    case "setRating":
      return {
        ...state,
        rating: payload
      }
    default:
      return state
  }

}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(form)

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={form.name} onChange={(event) => dispatch({type: "setName", payload: event.target.value})} />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input id="text" type="text" value={form.text} onChange={(event) => dispatch({type: "setText", payload: event.target.value})} />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input id="rating" type="number" min="0" max="5" value={form.rating} onChange={(event) => dispatch({type: "setRating", payload: event.target.value})} />
      </div>
    </div>
  );
};