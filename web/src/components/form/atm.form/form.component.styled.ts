import styled from 'styled-components';
import { Spacing } from '../../../styles/global';

export const FormItemWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.blue['600']};
	padding: ${Spacing.Small} ${Spacing.Medium};
`;

export const FormStyled = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
