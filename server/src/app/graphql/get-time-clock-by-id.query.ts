import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { TimeClock } from './hasura.model';

export const GetTimeClockByIdQuery: TypedDocumentNode<GetTimeClockByIdQueryOutput, GetTimeClockByIdQueryInput> = gql`
	query GetTimeClockByIdQuery($id: Int!) {
		clock_time_by_pk(id: $id) {
			end
			id
			user_id
			start
		}
	}
`;

interface GetTimeClockByIdQueryInput {
	id: string;
}

interface GetTimeClockByIdQueryOutput {
	clock_time_by_pk: TimeClock;
}
