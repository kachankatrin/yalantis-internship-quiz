import {
  FETCH_DATA,
  LIST_OF_BIRTHDAY_USERS,
  MOUSE_ENTER,
  MOUSE_LEAVE,
} from "../actions/ActionsConstants";

const initStore = {
  usersData: [],
  listOfBDUsers: [],
  isVisible: {},
};

export const mainReducer = (initialState = initStore, action) => {
  if (action.type === FETCH_DATA) {
    return {
      ...initialState,
      usersData: action.payload,
    };
  }
  if (action.type === LIST_OF_BIRTHDAY_USERS) {
    return {
      ...initialState,
      listOfBDUsers: {
        ...initialState.listOfBDUsers,

        [action.payload.key]: {
          users: initialState.usersData.filter((item) =>
            item.dob.includes(`-${action.payload.value}-`)
          ),
          length: initialState.usersData.filter((item) =>
            item.dob.includes(`-${action.payload.value}-`)
          ).length,
          id: action.payload.value,
        },
      },
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
