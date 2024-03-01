import { useCallback, useReducer } from "react";

export const INITIAL_STATE = {
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


export const useReviewForm = (initialValue = INITIAL_STATE) => {

  const [form, dispatch] = useReducer(reducer, initialValue);

  const setName = useCallback((event) => dispatch({type: "setName", payload: event.target.value}), []);
  const setText = useCallback((event) => dispatch({type: "setText", payload: event.target.value}), []);
  const setRating = useCallback((event) => dispatch({type: "setRating", payload: event.target.value}), [])

  return {
    form,
    setName,
    setText,
    setRating,
  }

};