import { useState } from 'react';
import { Background } from '../components/atm.background/background.component';
import { CustomButton } from '../components/atm.button/button.component';
import { Body } from '../components/atm.typography/typography.component.styled';
import { Header } from '../components/mol.header/header.component';
import { TimeController } from '../components/mol.time-controller/time-controller.component';
import { useFlashMessage } from '../hooks/flash-message';
import { Separator, SmallSeparator } from '../components/atm.separator/separator.component.styled';
import { ScreenWrapper } from '../components/atm-screen-wrapper/screen-wrapper.component';
import { TimeClockCard, TimeClockCardProps } from '../components/mol.time-clock-card/time-clock-card.component';

interface IDayOfWork extends TimeClockCardProps {
	id: string;
}

export const TimeClockPageContainer: React.FunctionComponent = () => {
	const [time, setTime] = useState<number>(0);
	const { showSuccess, FlashMessage } = useFlashMessage();

	const handleTimeRecordClick = () => {
		if (time > 0) {
			showSuccess('Horário registrado com sucesso!');
		} else {
			showSuccess('Horário de trabalho iniciado com sucesso!');
		}
	};

	const fakeData: IDayOfWork[] = [
		{
			id: '1',
			dateTime: new Date('2023-01-01').toISOString(),
			workedTimeInMinutes: 200,
		},
		{
			id: '2',
			dateTime: new Date('2023-02-01').toISOString(),
			workedTimeInMinutes: 20,
		},
		{
			id: '3',
			dateTime: new Date().toISOString(),
			workedTimeInMinutes: 300,
		},
	];
	return (
		<>
			<FlashMessage />
			<TimeClockPage onButtonClick={handleTimeRecordClick} userId="4sxxfmf" currentTimeInMinutes={time} data={fakeData} />
		</>
	);
};

interface TimeClockProps {
	onButtonClick: () => void;
	userId: string;
	currentTimeInMinutes: number;
	data?: IDayOfWork[];
}

export const TimeClockPage: React.FunctionComponent<TimeClockProps> = (props) => {
	return (
		<Background>
			<ScreenWrapper flexDirection="column">
				<Header userId={props.userId} />
				<TimeController currentTimeInMinutes={props.currentTimeInMinutes} />
				<Separator />
				<SmallSeparator />
				<CustomButton onClick={props.onButtonClick} title={`Hora de ${getButtonText(props.currentTimeInMinutes)}`} />
				<Separator />
				<SmallSeparator />
				<Body toBold>Dias anteriores</Body>
				<SmallSeparator />
				<>
					{props.data &&
						props.data.map((time) => {
							return <TimeClockCard key={time.id} dateTime={time.dateTime} workedTimeInMinutes={time.workedTimeInMinutes} />;
						})}
				</>
			</ScreenWrapper>
		</Background>
	);
};

const getButtonText = (currentTimeInMinutes: number) => (currentTimeInMinutes > 0 ? 'Saída' : 'Entrada');
