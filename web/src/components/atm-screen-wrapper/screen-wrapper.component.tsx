import { ReactNode } from 'react';
import { JustifyContentProperty, ScreenWrapperStyled, flexDirectionProperty } from './screen-wrapper.component.styled';

interface ScreenWrapperProps {
	children: ReactNode;
	flexDirection?: flexDirectionProperty;
	justifyContent?: JustifyContentProperty;
}

export const ScreenWrapper: React.FunctionComponent<ScreenWrapperProps> = ({ children, ...props }) => {
	return <ScreenWrapperStyled {...props}>{children}</ScreenWrapperStyled>;
};
