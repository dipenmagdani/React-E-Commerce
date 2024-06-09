import { createContext, useEffect, useState } from "react";
import data from '../api/data'

export const CounterContext = createContext(null);
export const CounterProvider = (props) => {
    const [product, setProduct] = useState([])
    const [exist, setExist] = useState(null)
    const [items, setItems] = useState([])

    useEffect(() => {
        setProduct(data)
    })
    return (
        <CounterContext.Provider value={{ exist, setExist, items, setItems, product }}>
            {props.children}
        </CounterContext.Provider>
    )
}