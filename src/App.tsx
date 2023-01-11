import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import styleContainer from "../src/Common/container.module.css";
import style from "../src/Components/counter.module.css";

function App() {



    const [counter, setCounter] = useState<number>(0)
    // const [counter, dispatchCounter] = useReducer(counterReducer,0)
    const [startValue, setStartValue] = useState<any>(0)
    // const [startValue, dispatchStartValue] = useReducer<any>(settingsReducer,0)
    const [maxValue, setMaxValue] = useState<any>(0)
    const [isTouched, setIsTouched] = useState<any>(false)

    const startValueHandler = (value: number) => {
        setStartValue(value)
        // dispatchStartValue(startValueAC(value))
        setIsTouched(true)

    }

    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        setIsTouched(true)
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
        // if (startValue >= 0 && maxValue > startValue)
        // dispatchCounter(incAC())
            setCounter(counter + 1)
    }
    function reset() {
        setCounter(startValue)
            // dispatchCounter(resetAC())
    }

    const incDisabled = counter === maxValue || maxValue <=  startValue || startValue < 0 ? isDisabled : false

    const Disabled = maxValue <= startValue || startValue < 0 ? isDisabled : false


    const addValue = (startValue: number, maxValue: number) => {
        if (startValue >= 0 && maxValue > startValue)
            setCounter(startValue)
    }
    const setNewCounter = () => {
        if (maxValue > startValue) {
            addValue(startValue, maxValue)
            setIsTouched(false)
        }

    }

    return (
        <div className={style.counterBlock}>
            <div className={style.main}>
                {/*<Counter maxValue={maxValue}*/}
                {/*         startValue={startValue}*/}
                {/*         counter={counter}*/}
                {/*    // counter={isTouched ? 'text' : counter}*/}
                {/*         buttonNameInc={'Inc'}*/}
                {/*         buttonNameReset={'Reset'}*/}
                {/*         callbackInc={inc}*/}
                {/*         callbackReset={reset}*/}
                {/*         incDisabled={incDisabled}*/}
                {/*         resetDisabled={Disabled}*/}
                {/*         isTouched={isTouched}*/}

                {/*/>*/}
                {/*<Settings nameMax={'max value'}*/}
                {/*          nameStart={'start value'}*/}
                {/*          setStartValue={startValueHandler}*/}
                {/*          setMaxValue={maxValueHandler}*/}
                {/*          maxValue={maxValue}*/}
                {/*          counter={setCounter}*/}
                {/*          // counter={ dispatchCounter}*/}
                {/*          startValue={startValue}*/}
                {/*          buttonName={'Set'}*/}
                {/*          callback={setNewCounter}*/}
                {/*          disabled={Disabled}*/}
                {/*          incDisabled={incDisabled}/>*/}
            </div>
        </div>
    );
}

export default App;
