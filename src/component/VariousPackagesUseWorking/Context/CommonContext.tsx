import { createContext, useState } from "react";
export const CommonContext = createContext({})
export const CommonContextProvider = (props: any) => {
    const [textOne, setTextOne] = useState('CommonContext')
    return (
        <CommonContext.Provider value={{ textOne }}>
            {props.children}
        </CommonContext.Provider>
    )
}