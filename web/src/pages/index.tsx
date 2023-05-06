import { SubmitHandler, useForm } from 'react-hook-form';
import { Background } from '../components/atm.background/background.component';
import { Input } from '../components/form/atm.input/input.component';
import { ButtonForm } from '../components/form/atm.input-button/input-button.component';
import { LargeSeparator } from '../components/atm.separator/separator.component.styled';
import { Form } from '../components/form/atm.form/form.component';
import { IlumeoLogo } from '../components/mol.ilumeo-logo/logo.component';
import { ScreenWrapper } from '../components/atm-screen-wrapper/screen-wrapper.component';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/user-context';
import { useNavigate } from 'react-router-dom';
import { useFlashMessage } from '../hooks/flash-message';

interface FormInput {
	userId: string;
}

export const Home: React.FunctionComponent = () => {
	const { register, handleSubmit } = useForm<FormInput>();
	const navigate = useNavigate();
	const { showError, FlashMessage } = useFlashMessage();
	const { isLoading, signIn, user } = useContext(UserContext);

	useEffect(() => {
		if (user?.id) {
			navigate('./time-clock');
		}
	}, [user]);

	const onSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
		try {
			await signIn(data.userId);
		} catch (Error) {
			showError('Usuário não encontrado');
		}
	};

	return (
		<Background>
			<FlashMessage />
			<ScreenWrapper justifyContent="center">
				<Form onSubmit={handleSubmit(onSubmit)}>
					<IlumeoLogo />
					<LargeSeparator />
					<LargeSeparator />
					<Input register={register} title="userId" labelText="Código do usuário" />
					<LargeSeparator />
					<ButtonForm title="Confirmar" loading={isLoading} />
				</Form>
			</ScreenWrapper>
		</Background>
	);
};
