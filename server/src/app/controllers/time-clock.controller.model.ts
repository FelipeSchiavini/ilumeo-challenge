import { IsString } from 'class-validator';

export class UpdateUserTimeClockInput {
	@IsString()
	id: string;

	@IsString()
	end: string;
}

export class CreateUserTimeClockInput {
	@IsString()
	userId: string;

	@IsString()
	start: string;
}
