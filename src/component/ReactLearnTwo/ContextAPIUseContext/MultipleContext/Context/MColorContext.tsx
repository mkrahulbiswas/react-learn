import { createContext, useState } from "react";
export const MCColorContext = createContext({})
export const MCColorContextProvider = (props: any) => {
    const [color, setColor] = useState('gray')
    return (
        <MCColorContext.Provider value={{ color, setColor }}>
            {props.children}
        </MCColorContext.Provider>
    )
}