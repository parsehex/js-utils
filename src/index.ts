import * as math from './math';
import * as array from './array';

export function clone<T>(data: T): T {
	return JSON.parse(JSON.stringify(data));
}

export default {
	array,
	clone,
	math,
};
