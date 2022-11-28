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
// export let maxValue = 10
// export let startValue = 5
// export let isDisabled = true


function App() {

    const [counter, setCounter] = useState<any  >(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

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

    // useEffect(()=> {
    //     let maxValueAsString = localStorage.getItem(`maxValue`)
    //     if (maxValueAsString )
    //     {
    //         let maxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(maxValue)
    //     }
    // },[])

    useEffect(() => {
            localStorage.setItem('counterValue', JSON.stringify(counter))
        }, [counter]
    )
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [counter])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [counter])

    function inc() {
        if (startValue >= 0 && maxValue > startValue )
            setCounter(counter + JSON.parse('1'))
        if ( counter ===  'Enter values and press set') {
            setCounter('Enter values and press set')
        }
    }

    function reset() {
        if (startValue >= 0 && maxValue > startValue) {
            setCounter(startValue)
        }
    }

    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue',JSON.stringify(counter))
    // }
    //
    // const getFromLocalStorageHandler = () => {
    //      let counterAsString =  localStorage.getItem('counterValue')
    //     if (counterAsString){
    //         let newCounter =  JSON.parse(counterAsString)
    //         setCounter(newCounter)
    //     }
    // }
    const incDisabled = counter === maxValue || maxValue <= startValue || startValue < 0 ? isDisabled : false
    // const resetDisabled = counter === startValue ? isDisabled : false
    const Disabled = maxValue <= startValue || startValue < 0 ? isDisabled : false

    const addValue = (startValue: number, maxValue: number) => {
        if (startValue >= 0 && maxValue > startValue )
            setCounter(startValue)
        // let maxValue = value
    }
    const setNewCounter = () => {
        if (maxValue > startValue)
            addValue(startValue, maxValue)
    }

    return (
        <div className='app' style={{textAlign:"center"}}>
            <Container fixed >
                <Grid
                    container
                    style={{backgroundColor: "#2a2c2e"}}
                    direction="row"
                    spacing={2}
                    columns={2}
                    marginTop={20}
                    justifyContent="space-between"
                >
                <Grid border="2px solid" borderColor='#61dbfb'  item xs={1}
                          >
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counter={counter}
                     buttonNameInc={'Inc'}
                     buttonNameReset={'Reset'}
                     callbackInc={inc}
                     callbackReset={reset}
                     incDisabled={incDisabled}
                     resetDisabled={Disabled}
            />
                </Grid>
                <Grid item xs={1} border="2px solid" borderColor='#61dbfb'>
            <Settings nameMax={'max value'}
                      nameStart={'start value'}
                      setStartValue={setStartValue}
                      setMaxValue={setMaxValue}
                      maxValue={maxValue}
                      counter={setCounter}
                      startValue={startValue}
                      buttonName={'Set'}
                      callback={setNewCounter}
                      disabled={Disabled}
                      incDisabled={incDisabled}/>
            {/*<Button name={'Inc'} callback={inc} disabled={incDisabled}/>*/}
            {/*<Button name={'Reset'} callback={reset} disabled={Disabled}/>*/}
            {/*<Button name={'Set'} callback={setNewCounter} disabled={Disabled}/>*/}
            {/*<Input name={'max value'}   setValue={setMaxValue} value={maxValue} />*/}
            {/*<Input name={'start value'} setValue={setStartValue} value={startValue}/>*/}
                </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
