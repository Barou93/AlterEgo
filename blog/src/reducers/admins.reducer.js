import {GET_ADMINS} from "../actions/admins.action";

const initialState = {};

export default function adminsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMINS:
      return action.payload;
    default:
      return state;
  }
}
