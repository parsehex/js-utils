/**
 * Given an array of objects, return the (first) object that contains `value` for `key`.
 *
 * Return `null` if none found.
 */
export function findByKey<T extends object>(arr: T[], key: keyof T, value: any) {
	if (arr.length === 0 || !Array.isArray(arr)) return null;

	const index = indexByKey(arr, key, value);

	if (index === null) return index;

	return arr[index];
}

/**
 * Given an array of objects, return the index of the (first) object that contains `value` for `key`.
 *
 * Return `null` if none found.
 */
export function indexByKey<T extends object>(arr: T[], key: keyof T, value: any) {
	if (arr.length === 0 || !Array.isArray(arr)) return null;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === value) return i;
	}

	return null;
}
