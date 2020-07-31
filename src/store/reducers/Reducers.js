import { FETCH_DATA } from "../actions/ActionsConstants";

const initStore = {
    usersData: []
}

export const mainReducer = (initialState = initStore, action) => {
    if (action.type === FETCH_DATA) {
        return {
            ...initialState,
            usersData: action.payload
        }
    }
    return initialState
}

