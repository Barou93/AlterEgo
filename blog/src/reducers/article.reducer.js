import {
  DELETE_ARTICLE,
  READ_ARTICLE,
  UPDATE_ARTICLE,
} from '../actions/article.action';

const initialState = {};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ARTICLE:
      return action.payload;
    case UPDATE_ARTICLE:
      return state.map((article) => {
        if (article.id === action.payload.id) {
          return {
            ...article,
            data: action.payload.data,
          };
        } else return article;
      });
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id);
    default:
      return state;
  }
}
