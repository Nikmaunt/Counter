import {StyledCounter} from "./Counter.styles";



type CounterType = {
    counter: number
    // setToLocalStorageHandler:() => void
    // getFromLocalStorageHandler: () => void
}

export function Counter(props: CounterType) {

    return <div >
            <StyledCounter error = {props.counter}>{props.counter}</StyledCounter>
    </div>
}

