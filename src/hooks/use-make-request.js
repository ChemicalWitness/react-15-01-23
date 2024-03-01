import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../redux/ui/request";

export function useRequest(thunk) {
  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) => selectStatus(state, request.requestId))

  const dispatch = useDispatch()

  const makeRequest = useCallback((...params) => {
    setRequest(dispatch(thunk(...params)));
  }, [dispatch, thunk])

  return [requestStatus, makeRequest];
}