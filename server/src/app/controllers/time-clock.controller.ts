import { Body, JsonController, Post, Put } from 'routing-controllers';
import { CreateUserTimeClockInput, UpdateUserTimeClockInput } from './time-clock.controller.model';
import { CreateTimeClockUseCase } from '../usecases/create-time-clock.use-case';
import { Container } from 'typedi';
import { TimeClock } from '../graphql/hasura.model';
import { UpdateTimeClockUseCase } from '../usecases/update-time-clock.use-case';

@JsonController()
export class TimeClockController {
	@Post('/time-clock/create')
	async createUserTimeClock(@Body() input: CreateUserTimeClockInput): Promise<{ timeClock: TimeClock }> {
		const createTimeClockUseCase = Container.get(CreateTimeClockUseCase);
		return { timeClock: await createTimeClockUseCase.exec(input) };
	}

	@Post('/time-clock/update')
	async updateUserTimeClock(@Body() input: UpdateUserTimeClockInput): Promise<{ timeClock: TimeClock }> {
		const updateTimeClockUseCase = Container.get(UpdateTimeClockUseCase);
		return {
			timeClock: await updateTimeClockUseCase.exec({
				id: input.id,
				end: input.end,
			}),
		};
	}
}
