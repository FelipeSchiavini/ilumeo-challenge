import { Service } from 'typedi';
import { UseCase } from './usecase.model';
import { hasuraClient } from '../../libs/hasura';
import { UpdateTimeClockMutation } from '../graphql/update-time-clock.mutation';
import { GetTimeClockByIdQuery } from '../graphql/get-time-clock-by-id.query';
import { TimeClock } from '../graphql/hasura.model';

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

		if (!this.verifyIfStartAndEndAreInSameDay(timeClock.clock_time_by_pk.start, input.end)) {
			throw Error();
		}

		if (!this.verifyIfEndIsGreaterThanStart(timeClock.clock_time_by_pk.start, input.end)) {
			throw Error();
		}

		if (!this.verifyIfWorkJourneyHasMoreThanOneMinute(timeClock.clock_time_by_pk.start, input.end)) {
			throw Error();
		}

		const { data } = await hasuraClient.mutate({
			mutation: UpdateTimeClockMutation,
			variables: { id: input.id, end: input.end },
		});

		return data?.update_clock_time_by_pk;
	}

	private verifyIfStartAndEndAreInSameDay(start: string, end: string): boolean {
		const d1 = new Date(start);
		const d2 = new Date(end);

		return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
	}

	private verifyIfEndIsGreaterThanStart = (startTime: string, endTime: string): boolean => {
		const start = new Date(startTime);
		const end = new Date(endTime);
		return end.getTime() > start.getTime();
	};

	private verifyIfWorkJourneyHasMoreThanOneMinute = (startTime: string, endTime: string): boolean => {
		const start = new Date(startTime).getTime();
		const end = new Date(endTime).getTime();
		const minutes: number = 1000 * 60;
		const differenceMinutes: number = end - start / minutes;
		return differenceMinutes > 1;
	};
}
