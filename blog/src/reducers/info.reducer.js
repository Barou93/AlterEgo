import {DELETE_INFOS, READ_INFOS} from '../actions/info.action';

const initialState = {};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case READ_INFOS:
      return action.payload;
    case DELETE_INFOS:
      return state.filter((infos) => infos.id !== action.payload.id);
    default:
      return state;
  }
}
