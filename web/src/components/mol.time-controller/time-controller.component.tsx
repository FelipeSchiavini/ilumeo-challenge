import { parseMinutesToString } from '../../utils/date/parse-minutes-to-string';
import { Body, H1 } from '../atm.typography/typography.component.styled';
import { TimeControllerWrapper } from './time-controller.component.styled';

interface TimeControllerProps {
	currentTimeInMinutes: number;
}

export const TimeController: React.FunctionComponent<TimeControllerProps> = ({ currentTimeInMinutes }) => {
	const currentTime = parseMinutesToString(currentTimeInMinutes);
	return (
		<TimeControllerWrapper>
			<H1 toBold>{currentTime}</H1>
			<Body toBold>Horas de hoje</Body>
		</TimeControllerWrapper>
	);
};
