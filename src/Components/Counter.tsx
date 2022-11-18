import {StyledCounter} from "./Counter.styles";
import Button from "./Button";
import React from "react";



type CounterType = {
    counter: number
    maxValue:number
    buttonNameInc:string
    buttonNameReset:string
    callbackInc:()=> void
    callbackReset:()=> void
    incDisabled:boolean
    resetDisabled:boolean
    // setToLocalStorageHandler:() => void
    // getFromLocalStorageHandler: () => void
}

export function Counter(props: CounterType) {

    return <div >
            <StyledCounter counter={props.counter} maxValue = {props.maxValue}>{props.counter}</StyledCounter>
        <Button name={props.buttonNameInc} callback={props.callbackInc} disabled={props.incDisabled}/>
        <Button name={props.buttonNameReset} callback={props.callbackReset} disabled={props.resetDisabled}/>
    </div>
}

