import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { TimeClockPageContainer } from '../pages/time-clock';

export const AppRoutes: React.FunctionComponent = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/time-clock" element={<TimeClockPageContainer />} />
		</Routes>
	);
};
