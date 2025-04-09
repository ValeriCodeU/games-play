import { useState } from "react";

export default function usePersistedState(defaultValue) {
    const [state, setState] = useState(defaultValue);

    const setPersistedState = () => {

    }

    return [
        state,
        setPersistedState
    ]
} 