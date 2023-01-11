import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import style from "../src/Components/counter.module.css";
import {
    addValueAC,
    incAC, incTC, InitialStateType,
    maxValueAC,
    resetAC, setCounterValueFromLocalStorageTC,
    setNewCounterAC, startValueAC
} from "./State/counter-reducers";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./State/Store/Store";


function AppWithRedux() {
    let counter = useSelector<AppRootStateType, any>(state => state.counter.counter)
    let maxValue =useSelector<AppRootStateType, any>(state => state.counter.maxValue)
    let startValue = useSelector<AppRootStateType, any>(state => state.counter.startValue)
    let isTouched =useSelector<AppRootStateType, any>(state => state.counter.isTouched)
    const dispatch = useDispatch()


    const startValueHandler = (value: number) => {
        dispatch(startValueAC(value))
    }
    const maxValueHandler = (value: number) => {
        dispatch(maxValueAC(value))
    }
    let isDisabled = true
    // useEffect(() => {
    //     let counterAsString = localStorage.getItem(`counterValue`)
    //     let maxValueAsString = localStorage.getItem(`maxValue`)
    //     let startValueAsString = localStorage.getItem(`startValue`)
    //     if (counterAsString) {
    //         let newCounter = JSON.parse(counterAsString)
    //         setCounter(newCounter)
    //     }
    //     if (maxValueAsString) {
    //         let maxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(maxValue)
    //     }
    //     if (startValueAsString) {
    //         let startValue = JSON.parse(startValueAsString)
    //         setStartValue(startValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //         localStorage.setItem('counterValue', JSON.stringify(counter))
    //     }, [counter]
    // )
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [counter])
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [counter])

    function inc() {
        dispatch(incAC())
    }
    function reset() {
        dispatch(resetAC())
    }

    const incDisabled = counter === maxValue || maxValue <= startValue || startValue < 0 ? isDisabled : false

    const Disabled = maxValue <= startValue || startValue < 0 ? isDisabled : false

    // const addValue = (startValue: number, maxValue: number) => {
    //     // // if (startValue >= 0 && maxValue > startValue)
    //     // //     // setCounter(startValue)
    //     // dispatch(addValueAC(startValue,maxValue))
    // }

    const setNewCounter = () => {
        dispatch(setNewCounterAC())
        dispatch(addValueAC(startValue, maxValue))
    }

    return (
        <div className={style.counterBlock}>
            <div className={style.main}>
                <Counter maxValue={maxValue}
                         startValue={startValue}
                         counter={counter}
                         buttonNameInc={'Inc'}
                         buttonNameReset={'Reset'}
                         callbackInc={inc}
                         callbackReset={reset}
                         incDisabled={incDisabled}
                         resetDisabled={Disabled}
                         isTouched={isTouched}
                />
                <Settings nameMax={'max value'}
                          nameStart={'start value'}
                          setStartValue={startValueHandler}
                          setMaxValue={maxValueHandler}
                          maxValue={maxValue}
                          counter={counter}
                          startValue={startValue}
                          buttonName={'Set'}
                          callback={setNewCounter}
                          disabled={Disabled}
                          incDisabled={incDisabled}/>
            </div>
        </div>
    );
}

export default AppWithRedux;
