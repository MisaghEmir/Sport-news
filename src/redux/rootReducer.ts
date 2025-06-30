import { combineReducers } from "redux";
import { toolsReducer } from "./tools/toolsReducer";




const rootReducer = combineReducers({
    toolsReducer: toolsReducer,
   
})

export default rootReducer