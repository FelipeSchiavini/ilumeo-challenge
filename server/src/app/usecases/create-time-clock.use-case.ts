import { Service } from 'typedi';
import { UseCase } from './usecase.model';
import { hasuraClient } from '../../libs/hasura';
import { CreateTimeClockMutation } from '../graphql/create-time-clock.mutation';
import { TimeClock } from '../graphql/hasura.model';

interface CreateTimeClockUseCaseInput {
	userId: string;
	startTime: string;
}

@Service()
export class CreateTimeClockUseCase implements UseCase<CreateTimeClockUseCaseInput, TimeClock> {
	async exec(input: CreateTimeClockUseCaseInput): Promise<TimeClock> {
		const { data } = await hasuraClient.mutate({
			mutation: CreateTimeClockMutation,
			variables: {
				object: {
					user_id: input.userId,
					start: input.startTime,
				},
			},
		});

		return data.insert_clock_time_one;
	}
}
