export const twoDigit = (num: number): string => `0${num}`.slice(-2);

/**
 * formats time to dd/mm/yy
 * @param dateTime expected to be IsoString or Date
 */
export const parseDateToDDMMYY = (dateTime: Date | string): string => {
	const date = new Date(dateTime);
	const day = twoDigit(date.getDate());
	const month = twoDigit(date.getMonth() + 1);
	const year = date.getFullYear().toString().slice(-2);
	return `${day}/${month}/${year}`;
};
