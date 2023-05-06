import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { User } from './hasura.model';

export const GetUserByIdQuery: TypedDocumentNode<GetUserByIdQueryOutput, GetUserByIdQueryInput> = gql`
	query GetUserByIdQuery($id: uuid!) {
		user_by_pk(id: $id) {
			id
			name
		}
	}
`;

interface GetUserByIdQueryInput {
	id: string;
}

interface GetUserByIdQueryOutput {
	user_by_pk: User;
}
