import styled, { css } from 'styled-components';
import { Border, Color, FontSize, FontWeight } from '../../styles/global';

export const ButtonDefaultStyle = css`
	background-color: ${(props) => props.theme.orange['500']};
	border: none;
	border-radius: ${Border.Radius};
	width: 100%;
	font-size: ${FontSize.XSmall};
	font-weight: ${FontWeight.SemiBold};
	padding: 14px;
	color: ${(props) => props.theme.blue['600']};
	text-align: center;
	line-height: 20px;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
	&:active {
		box-shadow: 0px 0px 2px 2px ${Color.Black};
	}
`;

export const ButtonStyled = styled.button`
	${ButtonDefaultStyle};
`;
