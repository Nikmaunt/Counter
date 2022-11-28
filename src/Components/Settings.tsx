import {StyledCounter} from "./Counter.styles";
import Input from "./Input";
import React from "react";
import Button, {Buttons} from "./Button";
import {StyledSettings} from "./Settings.styles";
import Grid from '@mui/material/Grid';



type SettingsType = {
    nameMax: string
    nameStart: string
    buttonName:string
    callback:()=> void
    setStartValue:(value:number)=> void
    setMaxValue:(value:number)=> void
    disabled: boolean
    incDisabled:boolean
    maxValue:number
    startValue:number
    counter:(value:number)=> void

    // setToLocalStorageHandler:() => void
    // getFromLocalStorageHandler: () => void
}

export function Settings (props: SettingsType) {

    return    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
    >
    <Input  name={props.nameMax}
               setValue={props.setMaxValue}
               value={props.maxValue}
                  counter={props.counter}
                disabled={props.disabled}

        />
        <Input name={props.nameStart}
               setValue={props.setStartValue}
               disabled={props.disabled}
               value={props.startValue}
               counter={props.counter}
        />
 <Grid container
       direction="row"
       justifyContent="space-evenly"

       marginTop="10px">
        <Buttons name={'Set'} callback={props.callback} disabled={props.disabled}/>
 </Grid>
    </Grid>
}

