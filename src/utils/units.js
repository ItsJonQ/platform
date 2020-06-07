/**
 * Converts a value (if number) to px.
 * @param {number|string} value Value to convert to px
 * @return {string} Value as px.
 */
export function toPx(value) {
	return isNaN(value) ? value : `${value}px`;
}
