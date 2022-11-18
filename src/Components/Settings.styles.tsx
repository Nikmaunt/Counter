import styled from "styled-components";
import {maxValue} from "../App";

type Props = {
 maxValue:number
}

 export const StyledSettings = styled.div<Props>`
 
  background-color: #61dafb;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  text-align: center;
  color: ${props => props.maxValue >= props.maxValue ? 'black' : 'black' };
`