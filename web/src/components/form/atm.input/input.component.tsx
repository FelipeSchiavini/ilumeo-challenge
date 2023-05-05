import { FieldValue, UseFormRegister } from 'react-hook-form';
import { InputStyled, LabelStyled } from './input.component.styled';
import { FormItemWrapperStyled } from '../atm.form/form.component.styled';

interface InputProps {
	labelText?: string;
	register: UseFormRegister<FieldValue<any>>;
	placeholder?: string;
	title: string;
}

export const Input: React.FunctionComponent<InputProps> = ({ register, placeholder, title, labelText }) => {
	return (
		<FormItemWrapperStyled>
			{labelText && <LabelStyled>{labelText}</LabelStyled>}
			<InputStyled placeholder={placeholder} {...register(title)} />
		</FormItemWrapperStyled>
	);
};
