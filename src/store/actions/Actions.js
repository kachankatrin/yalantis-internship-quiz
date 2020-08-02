import {
  FETCH_DATA,
  LIST_OF_BIRTHDAY_USERS,
  MOUSE_ENTER,
  MOUSE_LEAVE,
} from "./ActionsConstants";
import { url } from "../../utils";

export const fetchUsers = () => {
  return async (dispatch) => {
    const data = await fetch(url);
    const json = await data.json();
    const res = await dispatch({ type: FETCH_DATA, payload: json });
    console.log(res);
  };
};

export const getListOfBirthdayUsers = (id, key, currentTarget) => ({
  type: LIST_OF_BIRTHDAY_USERS,
  payload: { value: id, key, currentTarget },
});

export const handleMouseEnter = (index) => ({
  type: MOUSE_ENTER,
  payload: index,
});

export const handleMouseLeave = (index) => ({
  type: MOUSE_LEAVE,
  payload: index,
});