import styled from 'styled-components';
import { Border, MediaBreakpointWidth, Spacing } from '../../styles/global';

export const FlashMessageContainer = styled.div<{ type: string }>`
	position: absolute;
	top: ${Spacing.XXLarge};
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 90%;
	color: white;
	background-color: ${({ type, theme }) =>
		type === 'success' ? theme.green['400'] : type === 'error' ? theme.red['400'] : theme.orange['500']};
	padding: ${Spacing.Medium};
	border-radius: ${Border.Radius};
	@media (max-width: ${MediaBreakpointWidth.Mobile}px) {
		left: ${Spacing.Medium};
		right: ${Spacing.Medium};
	}
`;
