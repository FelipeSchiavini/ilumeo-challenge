import { Body, Get, JsonController, Post, QueryParam } from 'routing-controllers';
import { hasuraClient, hasuraHeaderConfig } from '../../libs/hasura';
import { CreateUserMutation } from '../graphql/create-user.mutation';
import { CreateUserInput } from './user.controller.model';
import { GetTimeClockByUserIdIdQuery } from '../graphql/get-time-clock-by-userid.query';
import { TimeClock, User } from '../graphql/hasura.model';
import { GetUserByIdQuery } from '../graphql/get-user-by-id';
import { UnknowError, UserCannotBeCreatedError, UserDoesNotExistError } from '../../utils/errors';
import { generateId } from '../../utils/utils';
import { sign } from 'jsonwebtoken';
import { Config } from '../../config';

@JsonController()
export class ClientController {
	@Post('/user/create')
	async createUser(@Body() input: CreateUserInput): Promise<{ user: User }> {
		try {
			const { data } = await hasuraClient.mutate({
				mutation: CreateUserMutation,
				variables: { name: input.name, id: generateId() },
				...hasuraHeaderConfig,
			});

			return { user: data?.insert_user.returning[0] };
		} catch (error) {
			console.error('ERROR: user.controller.ts:20 ~ ClientController ~ createUser ~ error:', error.message);
			throw new UserCannotBeCreatedError();
		}
	}

	@Get('/user/login')
	async verifyIfUserExists(@QueryParam('userId') userId: string): Promise<{ user: User; token: string }> {
		try {
			const { data } = await hasuraClient.mutate({
				mutation: GetUserByIdQuery,
				variables: { id: userId },
				...hasuraHeaderConfig,
			});
			if (!data.user_by_pk) {
				throw new UserDoesNotExistError();
			}

			const token = sign({}, Config.tokenSecret, {
				subject: 'userAlreadyExists',
				expiresIn: '7d',
			});

			return { user: data.user_by_pk, token };
		} catch (error) {
			console.error('ERROR: user.controller.ts:20 ~ ClientController ~ createUser ~ error:', error);
			throw new UserDoesNotExistError();
		}
	}

	@Get('/user')
	async getCompletedUserTimeClockList(@QueryParam('userId') userId: string): Promise<{ timeClockList: TimeClock[] }> {
		try {
			const { data } = await hasuraClient.query({
				query: GetTimeClockByUserIdIdQuery,
				variables: { userId },
				fetchPolicy: 'no-cache',
				...hasuraHeaderConfig,
			});
			const timeClockList = data.clocktime.filter((clock) => !!clock.start && !!clock.end);
			return { timeClockList: timeClockList };
		} catch (error) {
			console.error('ERROR: user.controller.ts:32 ~ ClientController ~ getUserTimeClockList ~ error:', error);
			throw new UnknowError();
		}
	}
}
