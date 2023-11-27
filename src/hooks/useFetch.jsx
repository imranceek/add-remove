import axios from "axios";
import { useEffect, useReducer } from "react";

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "data":
      return { ...state, data: payload }
    case "error":
      return { ...state, error: payload }
    case "isPending":
      return { ...state, isPending: payload }
    default:
      return state;
  }
};

export function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    error: null,
    isPending: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "isPending", payload: true });
      try {
        const req = await axios(url);

        if (req.status !== 200) {
          throw new Error(req.message);
        }
        dispatch({ type: "data", payload: req.data });
        dispatch({ type: "isPending", payload: false });
        dispatch({ typr: "error", payload: null });
      } catch (error) {
        dispatch({ typr: "error", payload: error });
        dispatch({ typr: "isPending", payload: false });
      }
    };

    fetchData();
  }, [url]);

  return { ...state };
}
