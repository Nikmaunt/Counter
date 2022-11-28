import styled from "styled-components";

type Props = {
 maxValue:number
 counter: number
 startValue:number
}

 export const StyledCounter = styled.div<Props>`
  
  //background-color: #61dafb;
  width: 170px;
  height: 130px;
  background: blue;
  text-align: center;
  color: ${props => props.counter >= props.maxValue ||  props.startValue < 0 ||  props.startValue >= props.maxValue    ? 'red' : 'black' };
`