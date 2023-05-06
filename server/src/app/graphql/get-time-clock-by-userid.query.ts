import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { TimeClock } from './hasura.model';

export const GetTimeClockByUserIdIdQuery: TypedDocumentNode<GetTimeClockByUserIdQueryOutput, GetTimeClockByUserIdQueryInput> = gql`
	query GetTimeClockByUserIdIdQuery($userId: uuid!) {
		clock_time(where: { user_id: { _eq: $userId } }) {
			end
			id
			start
			user_id
		}
	}
`;

interface GetTimeClockByUserIdQueryInput {
	userId: string;
}

interface GetTimeClockByUserIdQueryOutput {
	clock_time: TimeClock[];
}
