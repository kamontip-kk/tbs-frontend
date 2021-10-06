import React, { useState, createContext } from 'react';

export const StoreContext = createContext({});
export const StoreContextProvider = (props: any) => {
    const [msisdnStore, setMsisdnStore] = useState(undefined);
    const [passStore, setPassStore] = useState(undefined);
    const store = {
        msisdnStore: [msisdnStore, setMsisdnStore],
        passStore: [passStore, setPassStore],
    };

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    );
};
