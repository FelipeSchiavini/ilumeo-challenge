import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const apiClient: AxiosInstance = axios.create({
	baseURL: import.meta.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export interface RequestGetInput {
	path: string;
	config?: AxiosRequestConfig;
}

export interface RequestInput<T> extends RequestGetInput {
	data?: T;
}

export const apiPost = async <T, R>(input: RequestInput<T>): Promise<R> => {
	const { path, data, config } = input;
	try {
		const response = await apiClient.post(path, data, config);
		return response.data;
	} catch (error) {
		console.error('ERROR: axios-client.ts:16 ~ apiPost ~ error:', error);
		throw error;
	}
};

export const apiGet = async <R>(input: RequestGetInput): Promise<R> => {
	const { path, config } = input;
	try {
		const response = await apiClient.get(path, config);
		return response.data as R;
	} catch (error) {
		console.error('ERROR: axios-client.ts:16 ~ apiPost ~ error:', error);
		throw error;
	}
};
