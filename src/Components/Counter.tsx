import Button, {Buttons} from "./Button";
import React, {useState} from "react";
import style from "../Components/counter.module.css";
import {StyledTextField} from "./Input";


type CounterType = {
    counter: any
    maxValue: number
    startValue: number
    buttonNameInc: string
    buttonNameReset: string
    callbackInc: () => void
    callbackReset: () => void
    incDisabled: boolean
    resetDisabled: boolean
    isTouched: boolean
}


export function Counter(props: CounterType) {

    const MESSAGE = props.startValue >= props.maxValue || props.maxValue <= props.startValue || props.startValue < 0 || props.resetDisabled ? 'Incorrect value' : 'Enter values and press set'


    return <div className={style.mainBlock}>
        <div   className={style.counter}>
         <StyledTextField id="Outlined"
                         label={props.isTouched ? MESSAGE : props.counter}
                         variant="standard"
                         style={{
                             border: "1.5px solid #61dbfb ",
                             paddingTop: 39,
                             backgroundColor: "white",
                             width: "99%"
                         }}
                         error={props.incDisabled}
                         InputLabelProps={{shrink: false}}
                         InputProps={{
                             readOnly: true,
                             disableUnderline: true
                         }}
        />
            <div className={style.buttonsBlockCounter}>
        <Buttons name={props.buttonNameInc} callback={props.callbackInc} disabled={props.incDisabled} />
        <Buttons name={props.buttonNameReset} callback={props.callbackReset} disabled={props.resetDisabled}/>
            </div>
        </div>
    </div>


}

