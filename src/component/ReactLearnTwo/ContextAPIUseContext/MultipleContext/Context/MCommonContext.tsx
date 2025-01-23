import { createContext, useState } from "react";
export const MCCommonContext = createContext({})
export const MCCommonContextProvider = (props: any) => {
    const [count, setCount] = useState(10)
    return (
        <MCCommonContext.Provider value={{ count, setCount }}>
            {props.children}
        </MCCommonContext.Provider>
    )
}