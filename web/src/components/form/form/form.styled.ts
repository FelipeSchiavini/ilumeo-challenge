import styled from "styled-components";
import { Spacing } from "../../../styles/global";

export const FormItemWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props=> props.theme.blue['600']};
  padding: ${Spacing.Small} ${Spacing.Medium};
`

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 365px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: ${Spacing.Medium};
    padding-right: ${Spacing.Medium};
  }
`