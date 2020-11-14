import React, { FC, createContext, ReactNode, ReactElement } from "react";
import { ITodoStore, todoStoreInitializer } from ".";

export const TodoStoreContext = createContext<ITodoStore>({} as ITodoStore);

export type StoreComponent = FC<{
    children: ReactNode;
}>;

export const TodoStoreProvider: StoreComponent = ({
    children,
}): ReactElement => {
    return (
        <TodoStoreContext.Provider value={todoStoreInitializer}>
            {children}
        </TodoStoreContext.Provider>
    );
};
