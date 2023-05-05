import { SubmitHandler, useForm } from 'react-hook-form';
import { Background } from '../components/atm.background/background.component';
import { Input } from '../components/form/atm.input/input.component';
import { ButtonForm } from '../components/form/atm.input-button/input-button.component';
import { LargeSeparator } from '../components/atm.separator/separator.component.styled';
import { Form } from '../components/form/atm.form/form.component';
import { IlumeoLogo } from '../components/mol.ilumeo-logo/logo.component';
import { ScreenWrapper } from '../components/atm-screen-wrapper/screen-wrapper.component';

interface FormInput {
	userId: string;
}

export const Home: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit: SubmitHandler<any> = (data) => console.log(data);

	return (
		<Background>
			<ScreenWrapper justifyContent="center">
				<Form onSubmit={handleSubmit(onSubmit)}>
					<IlumeoLogo />
					<LargeSeparator />
					<LargeSeparator />
					<Input register={register} title="userId" labelText="Código do usuário" />
					<LargeSeparator />
					<ButtonForm title="Confirmar" />
				</Form>
			</ScreenWrapper>
		</Background>
	);
};
