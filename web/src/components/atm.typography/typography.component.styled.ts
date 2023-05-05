import styled, { css } from 'styled-components';
import { FontFamily, FontSize, FontWeight } from '../../styles/global';

interface StandardTextStyleProps {
	center?: 'center' | 'inherit';
	toBold?: boolean;
	toUpperCase?: boolean;
	lineHeight?: number;
}

const StandardTextStyle = css<StandardTextStyleProps>`
	text-align: ${(props) => (props.center ? 'center' : 'inherit')};
	color: ${(props) => props.theme.gray['200']};
	font-family: ${FontFamily.Primary};
	font-weight: ${(props) => (props?.toBold ? FontWeight.Bold : FontWeight.Normal)};
	line-height: ${({ lineHeight }) => lineHeight};
	text-transform: ${(props) => props?.toUpperCase && 'uppercase'};
`;

export const H1 = styled.h1<StandardTextStyleProps>`
	line-height: 1.5;
	font-size: ${FontSize.Medium};
	font-weight: ${FontWeight.Normal};
	${StandardTextStyle};
`;

export const Bold = styled.span`
	font-weight: ${FontWeight.Bold};
`;

export const Body = styled.span<StandardTextStyleProps>`
	${StandardTextStyle};
	line-height: 15px;
	font-size: ${FontSize.XXXSmall};
`;
