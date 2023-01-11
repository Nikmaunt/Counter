import {Dispatch} from "redux";
import {AppRootStateType} from "./Store/Store";


export type ActionsType = IncActionType | ResetActionType | StartValueActionType | MaxValueActionType | AddValueActionType|SetNewCounterActionType | SetCounterFromLocalStorageActionType

export type InitialStateType = {
    counter: number
    startValue: number
    maxValue: number
    isTouched: boolean
}

const initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 0,
    isTouched: false
}

export const counterReducer = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case'INC': {
            const stateCopy = state
            return {...stateCopy, counter: stateCopy.counter + 1}
        }
        case 'RESET': {
            const stateCopy = state
            return {...stateCopy, counter: stateCopy.startValue}
        }
        case 'SET-START-VALUE': {
            const stateCopy = state
            return {...stateCopy, startValue: action.value, isTouched:true}
        }
        case 'SET-MAX-VALUE': {
            const stateCopy = state
            return {...stateCopy, maxValue: action.value, isTouched:true}
        }
        case 'ADD-VALUE': {
            const stateCopy = state
            if ( stateCopy.startValue >= 0 && stateCopy .maxValue > stateCopy .startValue){
                return {...stateCopy, counter: action.startValue}
            }
            return {...stateCopy}
        }
        case 'SET-NEW-COUNTER': {
            const stateCopy = state
            if ( stateCopy.maxValue > stateCopy.startValue){
                return {...stateCopy, isTouched:false}
            }
            return {...stateCopy}
        }
        case 'SET-COUNTER-FROM-LOCAL-STORAGE': {
            return {...state, counter:action.counter}
        }
        default: return state
    }
}

export const incTC = () => (dispatch:Dispatch, getState:()=>AppRootStateType) => {
   let currentCounter =  getState().counter.counter
    localStorage.setItem('counterValue', JSON.stringify(currentCounter+1))
     dispatch(incAC())
}
export const setCounterValueFromLocalStorageTC = () => (dispatch:Dispatch) => {
    let counterAsString = localStorage.getItem(`counterValue`)
        if (counterAsString) {
            let newCounter = JSON.parse(counterAsString)
           dispatch(setCounterFromLocalStorageAC(newCounter))
        }
}




export type IncActionType = {
    type: 'INC'
}
export type ResetActionType = {
    type: 'RESET'
}
export type StartValueActionType = {
    type: 'SET-START-VALUE',
    value:number
}
export type MaxValueActionType = {
    type: 'SET-MAX-VALUE',
    value:number
}
export type AddValueActionType = {
    type: 'ADD-VALUE',
    startValue: number,
    maxValue: number
}
export type SetNewCounterActionType = {
    type: 'SET-NEW-COUNTER'
}

export const incAC = () :IncActionType => ({
    type: 'INC',
})

export type SetCounterFromLocalStorageActionType = ReturnType<typeof setCounterFromLocalStorageAC>

export const setCounterFromLocalStorageAC = (counter:number) => (
    {
        type: "SET-COUNTER-FROM-LOCAL-STORAGE", counter
    } as const
)

export const resetAC = () => {
    return { type: 'RESET'}
}

export const startValueAC = (value:number) => {
    return { type: 'SET-START-VALUE', value}
}

export const  maxValueAC = (value:number) => {
    return { type: 'SET-MAX-VALUE', value}
}

export const  addValueAC = (startValue: number, maxValue: number) => {
    return { type: 'ADD-VALUE', startValue, maxValue}
}

export const setNewCounterAC = () => {
    return { type: 'SET-NEW-COUNTER'}
}