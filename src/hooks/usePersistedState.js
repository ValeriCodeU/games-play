import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {

        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;

    });

    const setPersistedState = (value) => {
 
        const newValue = typeof value === 'function' ? value(state) : value;
 
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));

        //lecturer version:
        // setState(value);

        // let serializedValue;

        // if (typeof (value) === 'function') {
        //     serializedValue = JSON.stringify(value(state));
        // } else {
        //     serializedValue = JSON.stringify(state);
        // }

        // localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setPersistedState
    ]
} 