import React, {ChangeEvent, useState} from 'react';

export type InputType = {
    name: string
    setValue: (value: number) => void
    value: number
}

export const Input = (props: InputType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
    }
    return (
        <div>
            {props.name} <input type='number' onChange={onChangeInputHandler} value={props.value}/>
        </div>
    );
};

export default Input;