import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { TimeClock } from './hasura.model';

export const UpdateTimeClockMutation: TypedDocumentNode<UpdateTimeClockMutationOutput, UpdateTimeClockMutationInput> = gql`
	mutation UpdateTimeClockMutation($id: Int!, $end: timestamptz!) {
		update_clocktime_by_pk(pk_columns: { id: $id }, _set: { end: $end }) {
			id
			start
			user_id
			end
		}
	}
`;

interface UpdateTimeClockMutationInput {
	id: string;
	end: string;
}

interface UpdateTimeClockMutationOutput {
	update_clocktime_by_pk: TimeClock;
}
