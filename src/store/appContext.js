import React, { useEffect, useState } from 'react';
import getState from './flux';

export const GlobalContext = React.createContext(null); // Provider, Consumer

const injectContext = PassedComponent => {
    const AppContext = (props) => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore = {}) => setState({
                store: Object.assign(state.store, updateStore), // { curentUser: ..., lastname: 'Perez'}
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            state.actions.b();
        }, [])

        return (
            <GlobalContext.Provider value={state}>
                <PassedComponent {...props} />
            </GlobalContext.Provider>
        )
    }

    return AppContext;
}

export default injectContext;