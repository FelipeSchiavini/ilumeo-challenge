import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { RequestGetInput, apiGet } from '../libs/axios-client';

interface UseGetResult<R> {
	get: (input: RequestGetInput) => Promise<R>;
	isLoading: boolean;
}

export const useGet = <R>(): UseGetResult<R> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const get = async <R>(input: RequestGetInput): Promise<R> => {
		const { path, config } = input;
		setIsLoading(true);
		try {
			return await apiGet<R>({ path, config });
		} catch (error) {
			console.error('ERROR: user-post.ts:18 ~ post ~ error:', error);
			throw new Error();
		} finally {
			setIsLoading(false);
		}
	};

	return { get, isLoading };
};
