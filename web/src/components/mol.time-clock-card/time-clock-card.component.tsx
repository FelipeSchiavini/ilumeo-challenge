import { parseDateToDDMMYY } from '../../utils/date/parse-date-to-string';
import { parseMinutesToString } from '../../utils/date/parse-minutes-to-string';
import { Body } from '../atm.typography/typography.component.styled';
import { TimeClockCardStyledWrapper } from './time-clock-card.component.styled';

export interface TimeClockCardProps {
	dateTime: string;
	workedTimeInMinutes: number;
}

export const TimeClockCard: React.FunctionComponent<TimeClockCardProps> = ({ dateTime, workedTimeInMinutes }) => {
	const getDate = parseDateToDDMMYY(dateTime);
	const workedTime = parseMinutesToString(workedTimeInMinutes);

	return (
		<TimeClockCardStyledWrapper>
			<Body>{getDate}</Body>
			<Body toBold>{workedTime}</Body>
		</TimeClockCardStyledWrapper>
	);
};
