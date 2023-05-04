import styled from "styled-components";
import { Color, FontSize } from "../../../styles/global";

export const InputStyled = styled.input`
  background-color: transparent;
  &:focus{
    border: none;
    outline: none;
  }
  border: none;
  color: ${Color.White};
  font-size: ${FontSize.Medium};
`

export const LabelStyled = styled.label`
  color: ${Color.White};
  font-size: ${FontSize.XXXSmall};
  font-weight: 300;
  margin-bottom: 4px;
`

