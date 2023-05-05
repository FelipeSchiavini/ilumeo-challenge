import { ButtonComponentStyled } from './input-button.component.styled';

interface ButtonProps extends React.FormHTMLAttributes<HTMLInputElement> {
	title: string;
	width?: number;
}

export const ButtonForm: React.FC<ButtonProps> = ({ title, width }) => {
	return <ButtonComponentStyled value={title} type="submit" width={width} />;
};
