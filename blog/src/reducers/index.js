import {combineReducers} from "redux";
import adminReducer from "./admin.reducer";
import adminsReducer from "./admins.reducer";
import articleReducer from "./article.reducer";
import articlesReducer from "./articles.reducer";
import infoReducer from "./info.reducer";
import infosReducer from "./infos.reducer";
export default combineReducers({
  adminReducer,
  adminsReducer,
  articleReducer,
  articlesReducer,
  infoReducer,
  infosReducer,
});
