import jwt from 'jsonwebtoken';
import { UserNotAuthenticatedError } from '../../utils/errors';
import { Config } from '../../config';

interface Headers {
	authorization?: string;
}

export const authorize = (): ((_request: Request, response: Response, next: (err?: Error) => void) => void) => {
	return async (request: Request, response: Response, next: (err?: Error) => void) => {
		const headers = request?.headers as any;
		try {
			const [, token] = headers?.authorization?.split(' ');
			await jwt.verify(token, Config.tokenSecret);
			next();
		} catch (e) {
			next(new UserNotAuthenticatedError());
		}
	};
};
