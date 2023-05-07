import { ButtonComponentStyled } from './input-button.component.styled';

interface ButtonProps extends React.FormHTMLAttributes<HTMLInputElement> {
	title: string;
	width?: number;
	loading?: boolean;
}

export const ButtonForm: React.FC<ButtonProps> = ({ title, width, loading }) => {
	return <ButtonComponentStyled value={title} type="submit" width={width} disabled={loading} />;
};
