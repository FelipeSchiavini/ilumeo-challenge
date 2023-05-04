import styled from "styled-components";
import { Border, Color, FontSize, FontWeight } from "../../styles/global";

export const ButtonStyled = styled.button`
  background-color: ${props=> props.theme.orange['500']};
  border-radius: ${Border.Radius};
  width: 100%;
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.SemiBold}; 
  line-height: 20px;
  text-align: center;
  padding: 14px;
  color: ${props => props.theme.blue['600']};
  cursor: pointer;
  &:hover{
    opacity:0.9;
  }
  &:active {
    box-shadow: 0px 0px 2px 2px ${Color.Black};
  }
`