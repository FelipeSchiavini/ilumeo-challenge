//const env = process.env;

interface IAppEnv {
	apiUrl: string;
}

export const appEnv: IAppEnv = {
	apiUrl: 'http://localhost:3000/',
	//apiUrl: env.REACT_APP_API_URL as string,
};
