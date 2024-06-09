import { createContext, useState } from "react";

export const ItemsContext = createContext(null);
export const ItemsProvider = (props) => {
    const [items,setItems] = useState(0)
    return(
        <ItemsContext.Provider value={{items,setItems}}>
            {props.children}
        </ItemsContext.Provider>
    )
}