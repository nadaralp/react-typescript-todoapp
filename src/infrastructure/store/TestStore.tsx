import React, { ReactElement, useState } from 'react'
import useTodoStore from './useTodoStore';
//import { initializeTodoStore } from './TodoStoreInitializer';

interface Props {
    children: ReactElement
}

interface Animal {
    name?: string;
    age?: number;
    fuckyou?: boolean;
}

type MyStore = {
    storeName: string,
    setStoreName: (state: string) => void;
    animal: Animal,
    setAniaml: (animal: Animal) => void;
};

export const TestStore = React.createContext<MyStore | undefined>(undefined);

function TestProvider({ children }: Props): ReactElement {

    const [storeName, setStoreName] = useState<string>("my store");
    const [myAnimal, setMyAnimal] = useState<Animal>({});

    const myStoreValue: MyStore = {
        animal: myAnimal,
        storeName: storeName,
        setStoreName: setStoreName,
        setAniaml: setMyAnimal
    }


    return (
        <TestStore.Provider value={myStoreValue}>
            {children}
        </TestStore.Provider>
    )
}

export default TestProvider
