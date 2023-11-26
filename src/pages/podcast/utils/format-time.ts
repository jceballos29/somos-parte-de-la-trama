export const formantTime = (timeInSeconds: number | null): string => {
	if (timeInSeconds === null) return '00:00';

	const numberOfMinutes = Math.floor(timeInSeconds / 60);
	const numberOfSeconds = Math.floor(timeInSeconds % 60);
	const minutes = `${numberOfMinutes}`.padStart(2, '0');
	const seconds = `${numberOfSeconds}`.padStart(2, '0');

	return `${minutes}:${seconds}`;
};