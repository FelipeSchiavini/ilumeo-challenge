import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { TimeClock } from './hasura.model';

export const CreateTimeClockMutation: TypedDocumentNode<CreateTimeClockMutationOutput, CreateTimeClockMutationInput> = gql`
	mutation CreateTimeClockMutation($object: clock_time_insert_input!) {
		insert_clock_time_one(object: $object) {
			end
			id
			start
			user_id
		}
	}
`;

interface CreateTimeClockMutationInput {
	object: {
		user_id: string;
		start?: string;
		end?: string;
	};
}

interface CreateTimeClockMutationOutput {
	insert_clock_time_one: TimeClock;
}
