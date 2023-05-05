import { Body, Get, JsonController, Post, QueryParams } from 'routing-controllers';
import { hasuraClient } from '../../libs/hasura';
import gql from 'graphql-tag';
import { CreateUserMutation } from '../graphql/create-user.query';
import { CreateUserInput } from './user.controller.model';

@JsonController()
export class ClientController {
	@Post('/user/create')
	async createUser(@Body() input: CreateUserInput, response: Response) {

	try {
	const { data } = await hasuraClient.mutate({
		mutation : CreateUserMutation,
		variables: { name: input.name}
	})
	
		return {user : data?.insert_user.returning[0]}
	}catch (error) {
		console.error("ERROR: user.controller.ts:20 ~ ClientController ~ createUser ~ error:", error)
		throw new Error("Algo deu errado")
	}
}

	@Get('/user')
	async getUserTimeClockList(@QueryParams() userId: string) {}
}
