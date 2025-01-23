import { createContext, useState } from "react";
export const MCAboutContext = createContext({})
export const MCAboutContextProvider = (props: any) => {
    const [text, setText] = useState('This is about page')
    return (
        <MCAboutContext.Provider value={{ text, setText }}>
            {props.children}
        </MCAboutContext.Provider>
    )
}