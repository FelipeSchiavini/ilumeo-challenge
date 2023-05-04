import { SubmitHandler, useForm } from 'react-hook-form';
import { Background } from '../components/background/background.component';
import { CustomForm } from '../components/form/form/custom-form';
import { CustomInput } from '../components/form/input/input.component';
import { CustomFormButton } from '../components/form/input-button/input-button.component';
import { Bold, H1 } from '../components/typography/typography.component.styled';
import { Separator } from '../components/separator/separator.component.styled';

export const Home: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<any>();
	const onSubmit: SubmitHandler<any> = (data) => console.log(data);

	return (
		<Background>
			<CustomForm onSubmit={handleSubmit(onSubmit)}>
				<H1>
					Ponto <Bold>Ilumeo</Bold>
				</H1>
				<Separator />
				<Separator />
				<CustomInput register={register} title="userId" labelText="Código do usuário" />
				<Separator />
				<CustomFormButton title="Confirmar" />
			</CustomForm>
		</Background>
	);
};
