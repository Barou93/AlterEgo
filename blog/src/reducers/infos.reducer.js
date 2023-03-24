import {GET_INFOS} from '../actions/infos.action';

const initialState = {};

export default function infosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOS:
      return action.payload;

    default:
      return state;
  }
}
