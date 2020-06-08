import { is } from './is';

/**
 * Determines if a value is null or undefined.
 *
 * @param {any} value The value to check.
 * @return {boolean} Whether value is null or undefined.
 */
export function isValueDefined(value) {
	return is.defined(value);
}

/**
 * Determines if a value is empty, null, or undefined.
 *
 * @param {any} value The value to check.
 * @return {boolean} Whether value is empty.
 */
export function isValueEmpty(value) {
	const isEmptyString = value === '';

	return !isValueDefined(value) || isEmptyString;
}

/**
 * Attempts to get a defined/non-null value from a collection of arguments.
 *
 * @param {Array<any>} values Values to derive from.
 * @param {any} fallbackValue Fallback value if there are no defined values.
 * @return {any} A defined value or the fallback value.
 */
export function getDefinedValue(values = [], fallbackValue) {
	let value;

	for (const val of values) {
		if (isValueDefined(val)) {
			value = val;
			break;
		}
	}

	return isValueDefined(value) ? value : fallbackValue;
}
