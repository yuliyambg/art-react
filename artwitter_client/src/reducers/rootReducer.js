import {combineReducers} from "redux";

import {artsReducer} from "./artsReducer";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers(
    {
     arts: artsReducer,
        comments: commentsReducer
    }
)