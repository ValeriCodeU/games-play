import { useState } from "react";

export default function useForm(intialValues) {

    const [values, setValues] = useState(intialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    }

    return {
        values,
        onChange
    }
}