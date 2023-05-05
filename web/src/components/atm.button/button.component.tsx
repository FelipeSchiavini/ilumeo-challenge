import { ButtonStyled } from './button.component.styled';

interface CustomButtonProps {
	title: string;
	onClick: () => void;
}

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({ title, onClick }) => {
	return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};
