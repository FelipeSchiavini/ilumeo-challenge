import { Body, JsonController, Post, Put } from 'routing-controllers';
import { CreateUserTimeClockInput, UpdateUserTimeClockInput } from './time-clock.controller.model';
import { UpdateTimeClockUseCase } from '../usecases/update-time-clock.use-case';
import { CreateTimeClockUseCase } from '../usecases/create-time-clock.use-case';
import { Container } from 'typedi';
import { TimeClock } from '../graphql/hasura.model';

@JsonController()
export class TimeClockController {
	@Post('/time-clock/create')
	async createUserTimeClock(@Body() input: CreateUserTimeClockInput): Promise<{ timeClock: TimeClock }> {
		const createTimeClockUseCase = Container.get(CreateTimeClockUseCase);
		return { timeClock: await createTimeClockUseCase.exec(input) };
	}

	@Put('/time-clock/update')
	async updateUserTimeClock(@Body() input: UpdateUserTimeClockInput): Promise<{ timeClock: TimeClock }> {
		const updateTimeClockUseCase = Container.get(UpdateTimeClockUseCase);
		console.log("🚀 ~ file: time-clock.controller.ts:19 ~ TimeClockController ~ updateUserTimeClock ~ updateTimeClockUseCase:", updateTimeClockUseCase)
		return {
			timeClock: await updateTimeClockUseCase.exec({
				id: input.id,
				endTime: input.endTime,
			}),
		};
	}
}
