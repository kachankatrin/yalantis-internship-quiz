import {FETCH_DATA} from "./ActionsConstants";
import {url} from "../../utils";

export const fetchUsers = () => {
    return async (dispatch) => {
        const data = await fetch(url);
        const json = await data.json();
        const res = await dispatch({type: FETCH_DATA, payload: json});
        console.log(res);
    }
}