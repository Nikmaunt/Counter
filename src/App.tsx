import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/Counter";
import {json} from "stream/consumers";
import Button from "./Components/Button";
import Input from "./Components/Input";
import {Settings} from "./Components/Settings";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function App() {

    const [counter, setCounter] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    const startValueHandler = (value: number) => {
        setStartValue(value)
        setIsTouched(true)
    }

    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        setIsTouched(true)
    }

    let isDisabled = true

    useEffect(() => {
        let counterAsString = localStorage.getItem(`counterValue`)
        let maxValueAsString = localStorage.getItem(`maxValue`)
        let startValueAsString = localStorage.getItem(`startValue`)
        if (counterAsString) {
            let newCounter = JSON.parse(counterAsString)
            setCounter(newCounter)
        }
        if (maxValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            setMaxValue(maxValue)
        }
        if (startValueAsString) {
            let startValue = JSON.parse(startValueAsString)
            setStartValue(startValue)
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('counterValue', JSON.stringify(counter))
        }, []
    )
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [counter])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [counter])

    function inc() {
        if (startValue >= 0 && maxValue > startValue)
            setCounter(counter + 1)
        // if (counter === 'Enter values and press set') {
        //     setCounter('Enter values and press set')
        // }
    }

    function reset() {
        if (startValue >= 0 && maxValue > startValue) {
            setCounter(startValue)
        }
    }

    const incDisabled = counter === maxValue || maxValue <= startValue || startValue < 0 ? isDisabled : false

    const Disabled = maxValue <= startValue || startValue < 0 ? isDisabled : false
    // const Disabled = isTouched || maxValue <= startValue || startValue < 0 ? isDisabled : false
    // const Disabled = isTouched

    const addValue = (startValue: number, maxValue: number) => {
        if (startValue >= 0 && maxValue > startValue)
            setCounter(startValue)
    }
    const setNewCounter = () => {
        if (maxValue > startValue){
            addValue(startValue, maxValue)
            setIsTouched(false)
        }

    }
    console.log('toch', isTouched)
    return (
        <div className='app' style={{textAlign: "center", alignItems: "center"}}>
            <Container fixed>
                <Grid
                    container
                    style={{backgroundColor: "gray"}}
                    direction="row"
                    spacing={2}
                    columns={2}
                    marginTop={20}
                    justifyContent="space-between"
                >
                    <Grid border="2px solid" borderColor='#61dbfb' item xs={1}
                    >
                        <Counter maxValue={maxValue}
                                 startValue={startValue}
                                 counter={counter}
                                 // counter={isTouched ? 'text' : counter}
                                 buttonNameInc={'Inc'}
                                 buttonNameReset={'Reset'}
                                 callbackInc={inc}
                                 callbackReset={reset}
                                 incDisabled={incDisabled}
                                 resetDisabled={Disabled}
                                 isTouched={isTouched}

                        />
                    </Grid>
                    <Grid item xs={1} border="2px solid" borderColor='#61dbfb'>
                        <Settings nameMax={'max value'}
                                  nameStart={'start value'}
                                  setStartValue={startValueHandler}
                                  setMaxValue={maxValueHandler}
                                  maxValue={maxValue}
                                  counter={setCounter}
                                  startValue={startValue}
                                  buttonName={'Set'}
                                  callback={setNewCounter}
                                  disabled={Disabled}
                                  incDisabled={incDisabled}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
