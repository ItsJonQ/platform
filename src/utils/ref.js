import { is } from './is';

export function forwardRefAndSet(...args) {
	return (ref) => {
		args.forEach((arg) => {
			if (is.function(arg)) {
				arg(ref);
			}
			if (is.object(arg)) {
				arg.current = ref;
			}
		});
	};
}
