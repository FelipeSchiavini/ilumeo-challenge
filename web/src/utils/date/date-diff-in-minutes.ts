export const minutesInMilliseconds = 1000 * 60;

export function differenceMinutes(startTime: Date | undefined | string, endTime: Date | undefined | string): number {
	if (!endTime || !startTime) {
		return 0;
	}
	const end = new Date(endTime);
	const start = new Date(startTime);
	return Math.floor((new Date(end).getTime() - new Date(start).getTime()) / minutesInMilliseconds);
}
