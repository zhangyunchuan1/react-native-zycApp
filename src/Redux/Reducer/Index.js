//这个是封装的总的reducer纯函数
import { combineReducers } from "redux";

import user from "./user";　　　　　//这个子的纯函数


const reducers=combineReducers({
  user:user,
})
export default reducers;