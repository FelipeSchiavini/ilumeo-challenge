import { useState } from 'react';
import { usePost } from './user-post.hook';
import { TimeClock } from '../model/hasura.model';
import { apiPaths } from '../model/api.urls';
import { AxiosError } from 'axios';

interface useTimeClockHookInput {
	userId: string;
	onFinishWorkJourney: () => void;
	onCreateTimeClockMessage: () => void;
	onUpdateTimeClockMessage: () => void;
	onError: (message: string) => void;
}

interface useTimeClockHookOutput {
	handleTimeRecordClick: (dateTime: string) => Promise<void>;
	isLoading: boolean;
	isTimerActive: boolean;
}

export const useTimeClockHook = (input: useTimeClockHookInput): useTimeClockHookOutput => {
	const [isTimerActive, setTimerActive] = useState<boolean>(false);
	const { post, isLoading } = usePost<Partial<TimeClock>, { timeClock: Partial<TimeClock> }>();
	const [currentJourneyId, setCurrentJourneyId] = useState<string>('');

	const handleTimeRecordClick = async (dateTime: string) => {
		if (isTimerActive) {
			try {
				await post({ path: apiPaths.updateTimeClock, data: { id: currentJourneyId, end: dateTime } });
				input?.onFinishWorkJourney();
				input?.onUpdateTimeClockMessage();
				setTimerActive(false);
			} catch (error) {
				console.log('ERROR: handle-time-clock.hook.tsx:31 ~ handleTimeRecordClick ~ error:', error);
				if (error instanceof AxiosError) {
					input.onError(error.response?.data?.message)
				} else {
					input?.onError('Algo deu errado!Tente Novamente!')
				}
			} 
		} else {
			try {
				const startedJourney = await post({ path: apiPaths.createTimeClock, data: { userId: input.userId, start: dateTime } });
				setTimerActive(true);
				setCurrentJourneyId(startedJourney?.timeClock.id as string);
				input?.onCreateTimeClockMessage();
			} catch (error) {
				console.log('ERROR: handle-time-clock.hook.tsx:45 ~ handleTimeRecordClick ~ error:', error);
				if (error instanceof AxiosError) {
					input?.onError(error.response?.data?.message)
				}else {
					input?.onError('Algo deu errado!Tente Novamente!')
				}
			}
		}
	};

	return {
		handleTimeRecordClick,
		isLoading,
		isTimerActive,
	};
};
