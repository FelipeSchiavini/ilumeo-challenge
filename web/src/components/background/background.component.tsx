import { ReactNode } from "react";
import { BackgroundStyled } from "./background.component.styled"

interface BackgroundProps {
  children: ReactNode;
}

export const Background: React.FunctionComponent<BackgroundProps> = ({children}) => { 
  return <BackgroundStyled>
    {children}
  </BackgroundStyled>
}