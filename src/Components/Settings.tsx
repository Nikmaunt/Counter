import {StyledCounter} from "./Counter.styles";
import Input from "./Input";
import React from "react";
import Button from "./Button";
import {StyledSettings} from "./Settings.styles";
import {maxValue} from "../App";



type SettingsType = {
    nameMax: string
    nameStart: string
    buttonName:string
    callback:()=> void
    setStartValue:(value:number)=> void
    setMaxValue:(value:number)=> void
    disabled: boolean
    maxValue:number
    startValue:number

    // setToLocalStorageHandler:() => void
    // getFromLocalStorageHandler: () => void
}

export function Settings (props: SettingsType) {

    return <StyledSettings maxValue={maxValue}  >
        <Input name={props.nameMax}
               setValue={props.setMaxValue}
              value={props.maxValue} />
        <Input name={props.nameStart}
               setValue={props.setStartValue}
               value={props.startValue} />
        <Button name={'Set'} callback={props.callback} disabled={props.disabled}/>
          </StyledSettings>
}

