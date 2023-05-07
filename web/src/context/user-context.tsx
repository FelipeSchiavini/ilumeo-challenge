import { ReactNode, createContext, useState } from 'react';
import { useGet } from '../hooks/user-get.hook';
import { apiClient } from '../libs/axios-client';

interface User {
	id: string;
	name?: string;
}

interface UserContextData {
	user: User | null;
	signIn(userId: string): void;
	isLoading: boolean;
}

interface UserContextProviderProps {
	children: ReactNode;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserContextProvider: React.FunctionComponent<UserContextProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>({} as User);
	const { get, isLoading } = useGet<{ user: User, token: string }>();

	const signIn = async (userId: string) => {
		const path = `/user/login?userId=${userId}`;
		const data = await get({ path });
		setUser(data.user);
		apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
	};

	return <UserContext.Provider value={{ user, signIn, isLoading }}>{children}</UserContext.Provider>;
};
