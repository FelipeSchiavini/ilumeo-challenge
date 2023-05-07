import express from 'express';
var cors = require('cors');
import { useExpressServer } from 'routing-controllers';
import { Config } from './config';
import { Controllers } from './app/controllers';
import { errorHandler } from './app/middleware/error.middleware';

const ServerInitialize = async () => {
	const server = express();
	server.use(cors());

	server.use(express.json());

	useExpressServer(server, {
		controllers: Controllers,
		//classTransformer: true,
	});

	server.use(errorHandler);

	return server.listen(Config.apiPort, () => console.log(`Listening on port ${Config.apiPort}`));
};

ServerInitialize();
