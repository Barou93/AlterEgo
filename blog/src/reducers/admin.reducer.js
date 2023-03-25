import {DELETE_ADMIN, GET_ADMIN, UPDATE_ADMIN} from "../actions/admin.action";

const initialState = {};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return action.payload;
    case UPDATE_ADMIN:
      return state.map((admin) => {
        if (admin.id === action.payload.id) {
          return {
            ...admin,
            data: action.payload.data,
          };
        } else return admin;
      });
    case DELETE_ADMIN:
      return state.filter((admin) => admin.id !== action.payload.id);
    default:
      return state;
  }
}
