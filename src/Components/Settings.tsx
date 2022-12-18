import {StyledCounter} from "./Counter.styles";
import Input from "./Input";
import React from "react";
import Button, {Buttons} from "./Button";
import style from "./counter.module.css";


type SettingsType = {
    nameMax: string
    nameStart: string
    buttonName: string
    callback: () => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    disabled: boolean
    incDisabled: boolean
    maxValue: number
    startValue: number
    counter: (value: number ) => void
}

export function Settings(props: SettingsType) {

    return <div className={style.mainBlock}>
        <div className={style.settings}>
            <Input name={props.nameMax}
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
            <div className={style.buttonsBlockSettings}>
                <Buttons name={'Set'} callback={props.callback} disabled={props.disabled}/>
            </div>
        </div>
    </div>
}

