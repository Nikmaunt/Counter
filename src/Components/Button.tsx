import React from 'react';
import {StyledButton} from "./Button.styles";


type ButtonType = {
    name: string
    callback:  () => void
    disabled:boolean
}

export const Button = (props:ButtonType) => {
    const onClickHandler = () => {props.callback()}

    return (
        <div>
           <StyledButton onClick={onClickHandler} disabled={props.disabled}>{props.name}</StyledButton>
            {/*<button onClick={props.setToLocalStorageHandler}> setToLocalStorage </button>*/}
            {/*<button onClick={props.getFromLocalStorageHandler}> getFromLocalStorage </button>*/}
         </div>
    );
};

export default Button;