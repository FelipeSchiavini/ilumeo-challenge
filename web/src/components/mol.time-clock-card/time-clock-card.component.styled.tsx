import styled from 'styled-components';
import { Border, FontSize, Spacing } from '../../styles/global';

export const TimeClockCardStyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${Spacing.CustomSpacing} ${Spacing.Large} ${Spacing.CustomSpacing} ${Spacing.CustomSpacing};
	font-size: ${FontSize.XXXSmall};
	border-radius: ${Border.Radius};
	background-color: ${(props) => props.theme.blue['600']};
	& + & {
		margin-top: ${Spacing.Small};
	}
`;
