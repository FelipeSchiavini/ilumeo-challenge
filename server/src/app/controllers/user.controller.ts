import { Body, Get, JsonController, Post, QueryParam, QueryParams } from 'routing-controllers';
import { hasuraClient } from '../../libs/hasura';
import { CreateUserMutation } from '../graphql/create-user.mutation';
import { CreateUserInput } from './user.controller.model';
import { GetTimeClockByUserIdIdQuery } from '../graphql/get-time-clock-by-userid.query';
import { TimeClock, User } from '../graphql/hasura.model';

@JsonController()
export class ClientController {

	@Post('/user/create')
	async createUser(@Body() input: CreateUserInput): Promise<{ user: User }> {
		console.log("🚀 ~ file: user.controller.ts:12 ~ ClientController ~ createUser ~ input:", input)
		try {
			const { data } = await hasuraClient.mutate({
				mutation: CreateUserMutation,
				variables: { name: input.name },
			});

			return { user: data?.insert_user.returning[0] };
		} catch (error) {
			console.error('ERROR: user.controller.ts:20 ~ ClientController ~ createUser ~ error:', error);
			throw new Error();
		}
	}

	@Get('/user')
	async getUserTimeClockList(@QueryParam('userId') userId: any): Promise<{ timeClockList: TimeClock[] }> {
		try {
			const { data } = await hasuraClient.query({
				query: GetTimeClockByUserIdIdQuery,
				variables: { userId: "4a4f3014-8571-4672-a219-06d81c0040ce" },
			});
			return { timeClockList: data.clock_time };
		} catch (error) {
			console.error('ERROR: user.controller.ts:32 ~ ClientController ~ getUserTimeClockList ~ error:', error);
			throw new Error();
		}
		return userId
	}

}
