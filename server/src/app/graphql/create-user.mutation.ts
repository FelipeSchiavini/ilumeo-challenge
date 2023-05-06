import { TypedDocumentNode } from '@apollo/client';
import gql from 'graphql-tag';
import { User } from './hasura.model';

export const CreateUserMutation: TypedDocumentNode<CreateUserQueryOutput, CreateUserQueryInput>= gql`
	mutation CreateUserQuery($name: String!) {
		insert_user(objects: { name: $name }) {
			returning {
				name
				id
			}
		}
	}
`;

interface CreateUserQueryInput {
	name: string;
}

interface CreateUserQueryOutput {
	insert_user: {
		returning: User[];
	};
}
