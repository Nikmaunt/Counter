import React from 'react';
import {StyledButton} from "./Button.styles";
import Button from '@mui/material/Button';

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
        <div>
            <Button size="small" onClick={onClickHandler} disabled={props.disabled}
                    variant="contained">{props.name}</Button>
        </div>
    );
};

export default Button;