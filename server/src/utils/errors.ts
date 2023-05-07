import { InternalServerError } from 'routing-controllers';

export enum ErrorName {
	JourneyCannotHasLessThanOneMinute = 'JourneyCannotHasLessThanOneMinute',
	StartOfJourneyShouldBeGreaterThanEnd = 'StartOfJourneyShouldBeGreaterThanEnd',
	JourneyShouldntHaveMoreThan12HoursError = 'JourneyShouldntHaveMoreThan12Hours',
	UserCannotBeCreatedError = 'UserCannotBeCreated',
	UnknownError = 'Unknown',
	UserDoesNotExistError = 'UserDoesNotExist',
	UserNotAuthenticatedError = 'UserNotAuthenticated',
}

export class JourneyCannotHasLessThanOneMinuteError extends InternalServerError {
	constructor() {
		const message = 'Você não pode ter uma jornada de trabalho com menos de um minuto!';
		super(message);

		this.name = ErrorName.JourneyCannotHasLessThanOneMinute;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class StartOfJourneyShouldBeGreaterThanEndError extends InternalServerError {
	constructor() {
		const message = 'Não é possível ter uma jornada de trabalho onde o inicio é maior do que o final!';
		super(message);

		this.name = ErrorName.StartOfJourneyShouldBeGreaterThanEnd;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class JourneyShouldntHaveMoreThan12HoursError extends InternalServerError {
	constructor() {
		const message = 'Não é possível ter uma jornada com mais de 12 horas!';
		super(message);

		this.name = ErrorName.JourneyShouldntHaveMoreThan12HoursError;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class UserCannotBeCreatedError extends InternalServerError {
	constructor() {
		const message = 'Não foi possível criar um usuário';
		super(message);

		this.name = ErrorName.UserCannotBeCreatedError;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class UnknowError extends InternalServerError {
	constructor() {
		const message = 'Não foi possível criar um usuário';
		super(message);

		this.name = ErrorName.StartOfJourneyShouldBeGreaterThanEnd;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class UserDoesNotExistError extends InternalServerError {
	constructor() {
		const message = 'Usuário não existe';
		super(message);

		this.name = ErrorName.UserDoesNotExistError;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export class UserNotAuthenticatedError extends InternalServerError {
	constructor() {
		const message = 'Usuário não autenticado retorne para a tela de login!';
		super(message);

		this.name = ErrorName.UserNotAuthenticatedError;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
