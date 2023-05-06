import { ButtonStyled } from './button.component.styled';

interface CustomButtonProps {
	title: string;
	onClick: () => void;
	isLoading?: boolean;
}

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({ title, onClick, isLoading }) => {
	return (
		<ButtonStyled onClick={onClick} disabled={isLoading}>
			{title}
		</ButtonStyled>
	);
};
