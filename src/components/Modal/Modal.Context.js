import { createContext, useContext, useRef, useEffect } from 'react';
import create from 'zustand';

export const ModalContext = createContext({ dialog: {} });
export const useModalContext = () => useContext(ModalContext);

const [useBaseModalStore] = create((setState, getState) => ({
	modals: [],
	isStacked: false,
	getState,
	getIsUnderLayer: (ref) => {
		const { modals, isStacked } = getState();
		const latestRef = modals[modals.length - 1];

		if (!isStacked) return false;

		return latestRef !== ref;
	},
	mount: (ref) => {
		setState((state) => {
			const modals = [...state.modals, ref];
			const isStacked = modals.length > 1;

			return { modals, isStacked };
		});
	},
	unmount: (ref) => {
		setState((state) => {
			const modals = state.modals.filter((m) => m !== ref);
			const isStacked = modals.length > 1;

			return { modals, isStacked };
		});
	},
}));

export const useModalStore = () => useRef(useBaseModalStore()).current;

export const useModalState = (dialog) => {
	const modalStore = useModalStore();
	const { getIsUnderLayer } = modalStore;
	const { baseId, visible } = dialog;

	useEffect(() => {
		if (visible) {
			modalStore.mount(baseId);
		} else {
			modalStore.unmount(baseId);
		}
		return () => {
			modalStore.unmount(baseId);
		};
	}, [baseId, modalStore, visible]);

	const isUnderLayer = getIsUnderLayer(baseId);

	return { isUnderLayer };
};
