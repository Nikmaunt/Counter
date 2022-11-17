import styled from "styled-components";
import {maxValue} from "../App";

type Props = {
 error:number
}

 export const StyledCounter = styled.div<Props>`
 
  background-color: #61dafb;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  text-align: center;
  color: ${props => props.error >= maxValue ? 'red' : 'black' };
`