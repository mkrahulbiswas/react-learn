import { createContext, useState } from "react";
export const PackagesContext = createContext({})
export const PackagesContextProvider = (props: any) => {
    const [textThree, setTextThree] = useState('PackagesContext')
    return (
        <PackagesContext.Provider value={{ textThree }}>
            {props.children}
        </PackagesContext.Provider>
    )
}