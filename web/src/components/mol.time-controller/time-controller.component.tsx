import { useEffect, useRef, useState } from 'react';
import { parseMinutesToString } from '../../utils/date/parse-minutes-to-string';
import { Body, H1 } from '../atm.typography/typography.component.styled';
import { TimeControllerWrapper } from './time-controller.component.styled';
import { minutesInMilliseconds } from '../../utils/date/date-diff-in-minutes';
import React from 'react';

interface TimeControllerProps {
	isAtive: boolean;
}

export const TimeController: React.FunctionComponent<TimeControllerProps> = ({ isAtive }) => {
	const timerRef = useRef<number>();
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!isAtive) {
			setTime(0);
			return;
		}
		timerRef.current = window.setInterval(() => {
			setTime((t) => t + 1);
		}, minutesInMilliseconds);

		return () => {
			window.clearInterval(timerRef.current);
		};
	}, [isAtive]);

	return (
		<TimeControllerWrapper>
			<H1 toBold>{parseMinutesToString(time)}</H1>
			<Body toBold>Horas de hoje</Body>
		</TimeControllerWrapper>
	);
};
