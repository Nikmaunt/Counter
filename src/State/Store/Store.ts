import {combineReducers, createStore} from "redux";
import {counterReducer} from "../counter-reducers";


const rootReducer =  combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore( rootReducer)

// @ts-ignore
window.store = store