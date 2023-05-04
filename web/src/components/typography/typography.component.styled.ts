import styled, { css } from "styled-components";
import { FontFamily, FontSize, FontWeight } from "../../styles/global";

interface H1Props{
  center?: 'center' | 'inherit';
}

const H1Style = css<H1Props>`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  line-height: 1.5;
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  color: ${props => props.theme.gray['200']};
  font-weight: ${FontWeight.Normal};
`;

export const H1 = styled.h1<H1Props>`
  ${H1Style};
`;

export const Bold = styled.span`
  font-weight: ${FontWeight.Bold}
`