import { FormStyled } from './form.component.styled';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FunctionComponent<FormProps> = ({ children, ...props }) => {
	return <FormStyled {...props}>{children}</FormStyled>;
};
