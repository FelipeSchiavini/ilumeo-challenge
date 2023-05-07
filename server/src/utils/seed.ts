const dotenv = require('dotenv');
dotenv.config();
import { faker } from '@faker-js/faker';
import { CreateUserMutation } from '../app/graphql/create-user.mutation';
import { hasuraClient } from '../libs/hasura';
import { generateId } from './utils';

const createUserForTest = async () => {
	const { data } = await hasuraClient.mutate({
		mutation: CreateUserMutation,
		variables: { name: faker.name.firstName(), id: generateId() },
		context: {
			headers: {
				'x-hasura-access-key': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
				'content-type': 'application/json',
			},
		},
	});

	console.log(`Use To login id: ${data.insert_user.returning[0].id}`);
};

createUserForTest();
