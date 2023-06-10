// use local storage hook

import { useState, useEffect } from 'react';

/**
   useLocalStorage Hook
   @param {string} key - key to store in local storage
   @param {any} defaultValue - default value to use if no value is stored in local storage
    @returns {[any, function]} - returns an array with the value stored in local storage and a function to update the value
*/

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(initialValue);

    const handleValueChange = (newValue) => {
        localStorage.setItem(key, newValue.toString());
        setValue(newValue);
    }

    useEffect(() => {
        const v = localStorage.getItem(key);
        if (v) {
            setValue(v);
        } else {
            localStorage.setItem(key, initialValue.toString() );
        }
    }, []);

    return [value, handleValueChange];
}