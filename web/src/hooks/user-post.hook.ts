import { useState } from 'react';
import { RequestInput, apiPost } from '../libs/axios-client';

interface UsePostResult<T, R> {
	post: (input: RequestInput<T>) => Promise<R>;
	isLoading: boolean;
}

export const usePost = <T, R>(): UsePostResult<T, R> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const post = async <T, R>(input: RequestInput<T>) => {
		const { path, data, config } = input;
		setIsLoading(true);
		try {
			return await apiPost<T, R>({ path, data, config });
		} catch (error) {
			console.error('ERROR: user-post.ts:18 ~ post ~ error:', error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	return { post, isLoading };
};
