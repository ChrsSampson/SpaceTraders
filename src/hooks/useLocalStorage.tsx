// use local storage hook

import { useState, useEffect } from 'react';

/**
   useLocalStorage Hook
   @param {string} key - key to store in local storage
   @param {any} defaultValue - default value to use if no value is stored in local storage
    @returns {[any, function]} - returns an array with the value stored in local storage and a function to update the value
*/

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const v = localStorage.getItem(key) || defaultValue;
        return v;
    })

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value])

    return [value, setValue];
}