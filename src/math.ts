/**
 * Clamp a number so that it's no less than `min` and no greater than `max`.
 */
export function clamp(n: number, min: number, max: number) {
	// source: https://stackoverflow.com/a/11409944
	return Math.min(Math.max(n, min), max);
}

/**
 * Map a number from one range to another.
 */
export function map(n: number, fromMin: number, fromMax: number, toMin: number, toMax: number) {
	// source: https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
	return (n - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}

/**
 * Return a random number between `min` and `max` _inclusive_.
 */
export function ran(min: number, max: number) {
	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
