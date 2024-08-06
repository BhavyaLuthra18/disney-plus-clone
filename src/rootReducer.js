import { combineReducers } from "redux";
import userReducer from "./features/user/userSlice";
import movieReducer from "./features/movie/movieSlice"
const rootReducer = combineReducers({
    user:userReducer,
    movie:movieReducer,
});

export default rootReducer;