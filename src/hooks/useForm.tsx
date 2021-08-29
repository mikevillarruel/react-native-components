import React from 'react'
import { useState } from 'react';
import { View } from 'react-native';

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const onChange = <K extends Object>(value: K, field: keyof T) => {
        setState({
            ...state,
            [field]: value,
        })
    }

    return {
        ...state,
        form: state,
        onChange,
    }
}
