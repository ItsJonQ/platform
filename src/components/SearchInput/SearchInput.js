import React, { useRef } from 'react';
import { css, cx } from 'emotion';
import { FiSearch, FiX } from 'react-icons/fi';
import { platformConnect } from '../PlatformProvider';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import TextField from '../TextField';
import { useControlledState } from '../../hooks';
import { forwardRefAndSet, noop, isValueEmpty } from '../../utils';

function SearchInput({
	className,
	onChange = noop,
	onClear = noop,
	forwardedRef,
	isLoading = false,
	isRounded = true,
	prefix,
	suffix,
	type = 'search',
	value,
	...props
}) {
	const [state, setState] = useControlledState(value);
	const textFieldRef = useRef();
	const inputNodeRef = useRef();

	const getInputNode = () => {
		if (inputNodeRef.current) {
			return inputNodeRef.current;
		}
		inputNodeRef.current = textFieldRef.current.querySelector(
			'input,textarea',
		);

		return inputNodeRef.current;
	};

	const handleOnChange = (event) => {
		onChange(event);
		setState(event.target.value);
	};

	const handleOnClearClick = (event) => {
		setState('');
		onClear(event);
		getInputNode().focus();
	};

	const baseStyles = css`
		/* clears the 'X' from Internet Explorer */
		input[type='search']::-ms-clear {
			display: none;
			width: 0;
			height: 0;
		}
		input[type='search']::-ms-reveal {
			display: none;
			width: 0;
			height: 0;
		}

		/* clears the 'X' from Chrome */
		input[type='search'] ::-webkit-search-decoration,
		input[type='search']::-webkit-search-cancel-button,
		input[type='search']::-webkit-search-results-button,
		input[type='search']::-webkit-search-results-decoration {
			display: none;
		}
	`;

	const classes = cx(baseStyles, className);

	return (
		<TextField
			aria-busy={isLoading}
			className={classes}
			onChange={handleOnChange}
			isRounded={isRounded}
			ref={forwardRefAndSet(forwardRefAndSet, textFieldRef)}
			prefix={<SearchPrefix isLoading={isLoading} prefix={prefix} />}
			suffix={
				<>
					{suffix}
					<ClearButton onClick={handleOnClearClick} value={state} />
				</>
			}
			type={type}
			value={state}
			{...props}
		/>
	);
}

function SearchPrefix({ isLoading = false, prefix }) {
	return (
		<>
			{isLoading ? (
				<Spinner size={16} />
			) : (
				<Icon size={16} icon={<FiSearch />} />
			)}
			{prefix}
		</>
	);
}

function ClearButton({ onClick = noop, value }) {
	const hasValue = !isValueEmpty(value);
	if (!hasValue) return null;

	const handleOnClick = (event) => {
		event.stopPropagation();
		onClick(event);
	};

	return (
		<IconButton
			aria-label="Clear"
			tabIndex={-1}
			size="tiny"
			onClick={handleOnClick}
		>
			<Icon size={12} icon={<FiX />} />
		</IconButton>
	);
}

export default platformConnect('SearchInput', SearchInput);
