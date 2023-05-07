import { Service } from 'typedi';
import { UseCase } from './usecase.model';
import { hasuraClient } from '../../libs/hasura';
import { UpdateTimeClockMutation } from '../graphql/update-time-clock.mutation';
import { GetTimeClockByIdQuery } from '../graphql/get-time-clock-by-id.query';
import { TimeClock } from '../graphql/hasura.model';
import { JourneyCannotHasLessThanOneMinuteError, JourneyShouldntHaveMoreThan12HoursError, StartOfJourneyShouldBeGreaterThanEndError } from '../../utils/errors';

interface UpdateTimeClockUseCaseInput {
	id: string;
	end: string;
}

@Service()
export class UpdateTimeClockUseCase implements UseCase<UpdateTimeClockUseCaseInput, TimeClock> {
	async exec(input: UpdateTimeClockUseCaseInput): Promise<TimeClock> {
		const { data: timeClock } = await hasuraClient.query({
			query: GetTimeClockByIdQuery,
			variables: { id: input.id },
		});

		if (!this.verifyIfStartAndEndAreHaveLessThan12Hours(timeClock.clock_time_by_pk.start, input.end)) {
			throw new JourneyShouldntHaveMoreThan12HoursError();
		}

		if (!this.verifyIfEndIsGreaterThanStart(timeClock.clock_time_by_pk.start, input.end)) {
			throw new StartOfJourneyShouldBeGreaterThanEndError();
		}

		if (!this.verifyIfWorkJourneyHasMoreThanOneMinute(timeClock.clock_time_by_pk.start, input.end)) {
			throw new JourneyCannotHasLessThanOneMinuteError();
		}

		const { data } = await hasuraClient.mutate({
			mutation: UpdateTimeClockMutation,
			variables: { id: input.id, end: input.end },
		});

		return data?.update_clock_time_by_pk;
	}

	private verifyIfStartAndEndAreHaveLessThan12Hours(startTime: string, endTime: string): boolean {
		const differenceMinutes: number = diferenceInMinutes(startTime, endTime);
		const differenceInHours = differenceMinutes / 60
		return differenceInHours <= 12;
	}

	private verifyIfEndIsGreaterThanStart = (startTime: string, endTime: string): boolean => {
		const start = new Date(startTime);
		const end = new Date(endTime);
		return end.getTime() > start.getTime();
	};

	private verifyIfWorkJourneyHasMoreThanOneMinute = (startTime: string, endTime: string): boolean => {
		
		const differenceMinutes: number = diferenceInMinutes(startTime, endTime);
		return differenceMinutes > 0;
	};
}



function diferenceInMinutes(startTime: Date | undefined | string, endTime: Date | undefined | string): number {
	const minutesInMilliseconds = 1000 * 60;
	if (!endTime || !startTime) {
		return 0;
	}
	const end = new Date(endTime);
	const start = new Date(startTime);
	return Math.floor((new Date(end).getTime() - new Date(start).getTime()) / minutesInMilliseconds);
}