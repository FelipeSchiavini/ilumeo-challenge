import { Service } from 'typedi';
import { UseCase } from './usecase.model';
import { hasuraClient, hasuraHeaderConfig } from '../../libs/hasura';
import { CreateTimeClockMutation } from '../graphql/create-time-clock.mutation';
import { TimeClock } from '../graphql/hasura.model';
import { Config } from '../../config';

interface CreateTimeClockUseCaseInput {
	userId: string;
	start: string;
}

@Service()
export class CreateTimeClockUseCase implements UseCase<CreateTimeClockUseCaseInput, TimeClock> {
	async exec(input: CreateTimeClockUseCaseInput): Promise<TimeClock> {
		const { data } = await hasuraClient.mutate({
			mutation: CreateTimeClockMutation,
			variables: {
				object: {
					user_id: input.userId,
					start: input.start,
				},
			},
			...hasuraHeaderConfig,
		});

		return data.insert_clocktime_one;
	}
}
