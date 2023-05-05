import { twoDigit } from './parse-date-to-string';

export const parseMinutesToString = (minutes: number): string => {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	const formattedHours = hours.toString();
	const formattedMins = twoDigit(mins);
	return `${formattedHours}h ${formattedMins}m`;
};
