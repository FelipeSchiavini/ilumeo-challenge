export const errorHandler = (error, _, response, next) => {
	const status = error.status || 400;
	response.status(status).send({ message: error.message });
	next();
};
