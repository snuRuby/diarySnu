import { createContext, useContext } from 'react';

export const ApiContext = createContext();

export const ApiConsumer = ApiContext.Consumer;

export default () => useContext(ApiContext);
