import {StyledCounter} from "./Counter.styles";
import Button, {Buttons} from "./Button";
import React from "react";
import Grid from '@mui/material/Grid';

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

    // setToLocalStorageHandler:() => void
    // getFromLocalStorageHandler: () => void
}

export function Counter(props: CounterType) {
    const counterDisplay = props.startValue >= props.maxValue || props.maxValue <= props.startValue || props.startValue < 0 ? 'Incorrect value' : props.counter

    return  <Grid

    >
        <StyledTextField id="Outlined"
                   label={props.resetDisabled ? "Incorrect value" : props.resetDisabled ? "Err" : counterDisplay}
                   variant="standard"
                   style={{ border:"1.5px solid #61dbfb ", paddingTop: 39, backgroundColor: "white", textAlign:"center"}}
                   error={props.incDisabled}
                   InputLabelProps={{shrink: false} }
                   InputProps={{
                       readOnly: true,
                       disableUnderline: true
                   }}
        />
        <Grid
            container
            direction="row"
            rowSpacing={1}
            justifyContent="space-evenly"
            alignItems="baseline"
            marginTop="10px"
            marginLeft="43x"
        >
            <Buttons name={props.buttonNameInc} callback={props.callbackInc} disabled={props.incDisabled}/>
            <Buttons name={props.buttonNameReset} callback={props.callbackReset} disabled={props.resetDisabled}/>
        </Grid>
    </Grid>


}

