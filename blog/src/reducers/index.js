import { combineReducers } from "redux";
import adminReducer from "./admin.reducer";
import articleReducer from "./article.reducer";
import infosReducer from "./infos.reducer";
export default combineReducers({
   adminReducer,
   articleReducer,
   infosReducer,
});
