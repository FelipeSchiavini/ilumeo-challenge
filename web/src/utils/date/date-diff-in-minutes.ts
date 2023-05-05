export function differenceMinutes(start: Date | undefined, end: Date | undefined): number {
	if (!end || !start) {
		return 0;
	}
	const minutes: number = 1000 * 60;
	return (new Date(end).getTime() - new Date(start).getTime()) / minutes;
}
