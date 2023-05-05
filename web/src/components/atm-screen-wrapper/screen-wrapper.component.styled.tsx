import styled from 'styled-components';
import { MediaBreakpointWidth, Spacing } from '../../styles/global';

export type JustifyContentProperty = 'center' | 'flex-start';
export type flexDirectionProperty = 'column' | 'row';

interface ScreenWrapperStyledProps {
	justifyContent?: JustifyContentProperty;
	flexDirection?: flexDirectionProperty;
}

export const ScreenWrapperStyled = styled.div<ScreenWrapperStyledProps>`
	display: 'flex';
	flex-direction: ${(props) => (props?.flexDirection ? props?.flexDirection : 'row')};
	justify-content: ${(props) => (props?.justifyContent ? props?.flexDirection : 'flex-start')};
	width: 365px;
	@media (max-width: ${MediaBreakpointWidth.Mobile}px) {
		max-width: 365px;
		width: 100%;
		padding: 0 ${Spacing.Medium};
	}
`;
