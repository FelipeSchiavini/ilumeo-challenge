import { useContext, useEffect, useState } from 'react';
import { Background } from '../components/atm.background/background.component';
import { CustomButton } from '../components/atm.button/button.component';
import { Body } from '../components/atm.typography/typography.component.styled';
import { Header } from '../components/mol.header/header.component';
import { TimeController } from '../components/mol.time-controller/time-controller.component';
import { useFlashMessage } from '../hooks/flash-message.hook';
import { Separator, SmallSeparator } from '../components/atm.separator/separator.component.styled';
import { ScreenWrapper } from '../components/atm-screen-wrapper/screen-wrapper.component';
import { TimeClockCard, TimeClockCardProps } from '../components/mol.time-clock-card/time-clock-card.component';
import { UserContext } from '../context/user-context';
import { TimeClock } from '../model/hasura.model';
import { useGet } from '../hooks/user-get.hook';
import { differenceMinutes } from '../utils/date/date-diff-in-minutes';
import { useNavigate } from 'react-router-dom';
import { RequestGetInput } from '../libs/axios-client';
import { useTimeClockHook } from '../hooks/handle-time-clock.hook';

interface IDayOfWork extends TimeClockCardProps {
	id: string;
}

export const TimeClockPageContainer: React.FunctionComponent = () => {
	const [clockTimeList, setClockTimeList] = useState<IDayOfWork[]>([] as IDayOfWork[]);
	const { showSuccess, showError, FlashMessage } = useFlashMessage();
	const { get } = useGet<{ timeClockList: TimeClock[] }>();
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	const { handleTimeRecordClick, isLoading, isTimerActive } = useTimeClockHook({
		userId: user?.id || '',
		onFinishWorkJourney: () =>
			updateTimeClockList({
				userId: user?.id,
				get: get,
				onError: () => navigate('/'),
				onFinishRequest: setClockTimeList,
			}),
		onUpdateTimeClockMessage: () => showSuccess('Fim de jornada inserido com sucesso!'),
		onCreateTimeClockMessage: () => showSuccess('Inicio de jornada inserido com sucesso!'),
		onError: (message: string) => showError(message),
	});

	useEffect(() => {
		updateTimeClockList({
			userId: user?.id,
			get: get,
			onError: () => navigate('/'),
			onFinishRequest: setClockTimeList,
		});
	}, [user]);

	return (
		<>
			<FlashMessage />
			<TimeClockPage
				onButtonClick={handleTimeRecordClick}
				userId={user?.id || ''}
				data={clockTimeList}
				isLoading={isLoading}
				isTimerActive={isTimerActive}
			/>
		</>
	);
};

interface TimeClockProps {
	onButtonClick: (dateTime: string) => void;
	userId: string;
	isTimerActive: boolean;
	data?: IDayOfWork[];
	isLoading: boolean;
}

export const TimeClockPage: React.FunctionComponent<TimeClockProps> = (props) => {
	return (
		<Background>
			<ScreenWrapper flexDirection="column">
				<Header userId={props.userId} />
				<TimeController isAtive={props.isTimerActive} />
				<Separator />
				<SmallSeparator />
				<CustomButton
					onClick={() => props.onButtonClick(new Date().toISOString())}
					title={`Hora de ${getButtonText(props.isTimerActive)}`}
					isLoading={props.isLoading}
				/>
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

const getButtonText = (isActive: boolean) => (isActive ? 'Saída' : 'Entrada');

const mapToTimeClockCardInput = (timeClockList: TimeClock[]): IDayOfWork[] => {
	if (!timeClockList) {
		return [];
	}
	return timeClockList?.map((timeClock) => {
		return {
			id: timeClock.id,
			dateTime: timeClock.start,
			workedTimeInMinutes: differenceMinutes(timeClock.start, timeClock.end),
		};
	});
};

interface updateTimeClockListInput {
	userId: string | undefined;
	get: (input: RequestGetInput) => Promise<{
		timeClockList: TimeClock[];
	}>;
	onError: () => void;
	onFinishRequest: (value: React.SetStateAction<IDayOfWork[]>) => void;
}

export const updateTimeClockList = async (input: updateTimeClockListInput) => {
	try {
		const response = await input.get({ path: `/user?userId=${input.userId}` });
		const dataList = mapToTimeClockCardInput(response.timeClockList);
		input?.onFinishRequest(dataList);
	} catch (e) {
		console.log('ERROR: time-clock.tsx:134 ~ updateTimeClockList ~ e:', e);
		input?.onError();
	}
};
