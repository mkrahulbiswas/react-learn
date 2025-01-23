import { createContext, useState } from "react";
export const MCHomeContext = createContext({})
export const MCHomeContextProvider = (props: any) => {
    const [text, setText] = useState('This is home page')
    return (
        <MCHomeContext.Provider value={{ text, setText }}>
            {props.children}
        </MCHomeContext.Provider>
    )
}