import { useState } from "react"

function useLocalStorage(key, initVal) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initVal))

    const setValue = (value) => {
        // check if a fucntion
        const valueToStore = value instanceof Function ? value (localStorageValue) : value
        setLocalStorageValue(value)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initVal) {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initVal
}

export default useLocalStorage