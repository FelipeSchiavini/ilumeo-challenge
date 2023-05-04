import styled from "styled-components";
import { Border, FontSize, FontWeight, Spacing } from "../../../styles/global";

export const ButtonComponentStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.blue['600']};
  font-weight: ${FontWeight.SemiBold};
  font-size: ${FontSize.XSmall};
  line-height: 20px;
  &:focus{
    border: none;
    outline: none;
  }
`
interface FormButtonWrapperInput {
  width?: number;
}

export const FormButtonWrapper = styled.div<FormButtonWrapperInput>`
  background-color: ${props=> props.theme.orange['500']};
  border-radius: ${Border.Radius};
  cursor: pointer;
  text-align: center;
  padding: 14px;
  border: none;
  padding: ${Spacing.Small} ${Spacing.Medium};
  width: ${props => props?.width ? `${props.width}px` : '100%'};
  &:hover{
    opacity:0.9;
  }
  &:active {
    opacity:0.8;
  `


  