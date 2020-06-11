import { createContext, useContext } from 'react';

export const ModalContext = createContext({});
export const useModalContext = () => useContext(ModalContext);
