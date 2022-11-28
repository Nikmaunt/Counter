import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {inputLabelClasses, outlinedInputClasses, styled} from "@mui/material";

export const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#61dbfb",
        textAlign:"center"
    },
[`&:hover .${outlinedInputClasses.input}`]: {
    color: "#61dbfb"
},
    [`& .${inputLabelClasses.outlined}`]: {
        color: "black",
        borderColor: "#61dbfb",
        marginTop:4
    }

});




export type InputType = {
    name: string
    setValue: (value: number) => void
    value: number
    counter:(value:any)=> void
    disabled:boolean
}

export const Input = (props: InputType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
        props.counter(  'Enter values and press set')

    }
    return (
        <div>
            {/*{props.name} <input type='number' onChange={onChangeInputHandler}  value={props.value}/>*/}
            <StyledTextField  id="Standard"
                       style={{marginTop:6, backgroundColor: "white"}}
                        color="info"
                       error={props.disabled}
                       size="small"
                       type='number'
                       onChange={onChangeInputHandler}
                       value={props.value}
                       label={props.disabled? 'incorrect value' : props.name}
                       variant="outlined" />
        </div>
    );
};

export default Input;