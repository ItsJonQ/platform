import React, { useState } from 'react';
import { css, cx } from 'emotion';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import { platformConnect } from '../PlatformProvider';
import BaseModal, { useModalContext } from '../BaseModal';
import Card from '../Card';
import Flex from '../Flex';
import Menu from '../Menu';
import { useTheme } from '../../css';
import { interpolate } from '../../utils';

function Content({ children }) {
	const { dialog } = useModalContext();
	const [isDragging, setIsDragging] = useState(false);
	const [animatedCardStyles, setAnimatedCardStyles] = useSpring(() => ({
		y: 0,
	}));
	const [animatedMenuStyles, setAnimatedMenuStyles] = useSpring(() => ({
		scale: 1,
	}));

	const wrapperStyles = css`
		max-width: 680px;
		margin: auto;
	`;

	const cardStyles = css`
		width: 100%;
		outline: none;
		position: relative;
	`;

	const menuWrapper = css`
		max-width: 200px;
	`;

	const dragGestureBind = useDrag(
		({ down, movement: [mx, my] }) => {
			setAnimatedMenuStyles({ scale: my > 50 && down ? 0 : 1 });
			if (my > 100 && !down) {
				dialog.hide();
				setAnimatedCardStyles({
					y: window.innerHeight,
					immediate: false,
				});
				setIsDragging(down);
				return;
			}

			setAnimatedCardStyles({
				y: down ? my : 0,
				immediate: down,
			});
			setIsDragging(down);
		},
		{
			bounds: { top: 0 },
			rubberband: true,
		},
	);

	const handleOnClickHide = () => {
		console.log('go');
		requestAnimationFrame(() => {
			setAnimatedCardStyles({
				y: window.innerHeight,
			});
			setAnimatedCardStyles({
				y: 0,
			});
		});

		setTimeout(() => {
			if (!isDragging) {
				// dialog.hide();
			}
		}, 200);
	};

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				userSelect: isDragging ? 'none' : null,
				overflow: 'hidden',
			}}
			{...dragGestureBind()}
			onClick={handleOnClickHide}
		>
			<Flex align="top" className={wrapperStyles}>
				<Flex.Block>
					<animated.div
						style={{
							opacity: animatedCardStyles.y.interpolate(
								[0, window.innerHeight * 0.75],
								[1, 0],
							),
							transform: animatedCardStyles.y.interpolate((y) => {
								const scale = interpolate(
									y,
									[0, window.innerHeight],
									[1, 0.75],
								);

								return `translateY(${y}px) scale(${scale})`;
							}),
						}}
					>
						<Card
							className={cardStyles}
							onClick={(event) => event.stopPropagation()}
						>
							{children}
						</Card>
					</animated.div>
				</Flex.Block>
				<Flex.Block className={menuWrapper}>
					<animated.div
						style={{
							transformOrigin: 'top left',
							transform: animatedMenuStyles.scale.interpolate(
								(scale) => {
									return `scale(${scale})`;
								},
							),
						}}
					>
						<Menu.Provider
							menu={{
								modal: false,
								visible: true,
							}}
						>
							<Menu
								hideOnClickOutside={false}
								onClick={(event) => event.stopPropagation()}
							>
								<Menu.Item>Upvote</Menu.Item>
								<Menu.Item>Downvote</Menu.Item>
								<Menu.Item>Save</Menu.Item>
								<Menu.Item>Reply</Menu.Item>
								<Menu.Item>Hide</Menu.Item>
							</Menu>
						</Menu.Provider>
					</animated.div>
				</Flex.Block>
			</Flex>
		</div>
	);
}

function ContextMenu({
	className,
	children,
	forwardedRef,
	visible = true,
	...props
}) {
	const baseStyles = css`
		outline: none;
	`;

	const classes = cx(baseStyles, className);

	const modalProps = {
		...props,
		visible,
	};

	return (
		<BaseModal className={classes} ref={forwardedRef} {...modalProps}>
			<Content>{children}</Content>
		</BaseModal>
	);
}

export default platformConnect('ContextMenu', ContextMenu);
