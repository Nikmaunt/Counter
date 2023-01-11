import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "../counter-reducers";
import thunk from "redux-thunk";
import app from "../../App";
import {loadState, saveState} from "../../utils/localstorage-utils";


const rootReducer =  combineReducers({
    counter: counterReducer
})

export const store = createStore( rootReducer, loadState())
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store