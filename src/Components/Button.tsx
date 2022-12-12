import React from 'react';
import {StyledButton} from "./Button.styles";
import style from "./counter.module.css";
// import Button from '@mui/material/Button';

type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Buttons = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (

        <div >
            <button className={props.disabled ? style.disabled : style.buttons} onClick={onClickHandler} disabled={props.disabled}>{props.name} </button>
            {/*<Button size="small" onClick={onClickHandler} disabled={props.disabled}*/}
            {/*        variant="contained">{props.name}</Button>*/}
        </div>
    );
};

export default Buttons;