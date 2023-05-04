import styled from "styled-components";


export const BackgroundStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.blue['800']};
  display: flex;
  justify-content: center;
  align-items: center;
`