import {
  FETCH_DATA,
  MOUSE_ENTER,
  MOUSE_LEAVE,
} from "../actions/ActionsConstants";
import { calendar } from "../../utils";

const initStore = {
  usersData: [],
  listOfBDUsers: [],
  isVisible: {},
  calendar: calendar,
};

export const mainReducer = (initialState = initStore, action) => {
  if (action.type === FETCH_DATA) {
    return {
      ...initialState,
      usersData: action.payload.json,
      listOfBDUsers: initialState.calendar.map((item, index) => {
        return {
          [item.month]: {
            users: action.payload.json.filter(
              (item) => new Date(item.dob).getMonth() === index
            ),
          },
        };
      }),
    };
  }
  if (action.type === MOUSE_ENTER) {
    return {
      ...initialState,
      isVisible: { [action.payload]: true },
    };
  }
  if (action.type === MOUSE_LEAVE) {
    return {
      ...initialState,
      isVisible: { [action.payload]: false },
    };
  }
  return initialState;
};