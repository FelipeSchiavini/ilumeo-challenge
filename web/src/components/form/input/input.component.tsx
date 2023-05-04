import { FieldValue, UseFormRegister } from 'react-hook-form';
import { FormItemWrapperStyled } from '../form/form.styled';
import { InputStyled, LabelStyled } from './input.component.styled';

interface CustomInputProps {
	labelText?: string;
	register: UseFormRegister<FieldValue<any>>;
	placeholder?: string;
	title: string;
}

export const CustomInput: React.FunctionComponent<CustomInputProps> = ({ register, placeholder, title, labelText }) => {
	return (
		<FormItemWrapperStyled>
			{labelText && <LabelStyled>{labelText}</LabelStyled>}
			<InputStyled placeholder={placeholder} {...register(title)} />
		</FormItemWrapperStyled>
	);
};
