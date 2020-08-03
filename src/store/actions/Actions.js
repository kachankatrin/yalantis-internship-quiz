import {
  FETCH_DATA,
  MOUSE_ENTER,
  MOUSE_LEAVE,
} from "./ActionsConstants";
import { url } from "../../utils";

export const fetchUsers = (id, key) => {
  return async (dispatch) => {
    const data = await fetch(url);
    const json = await data.json();
    const res = await dispatch({ type: FETCH_DATA, payload: {json} });
    console.log(res);
  };
};

export const handleMouseEnter = (index) => ({
  type: MOUSE_ENTER,
  payload: index,
});

export const handleMouseLeave = (index) => ({
  type: MOUSE_LEAVE,
  payload: index,
});