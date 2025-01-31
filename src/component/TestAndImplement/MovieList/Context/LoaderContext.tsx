import { createContext, useState } from "react";
export const LoaderContext = createContext({})
export const LoaderContextProvider = (props: any) => {
    const [loader, setLoader] = useState(false);
    return (
        <LoaderContext.Provider value={{ loader, setLoader }}>
            {props.children}
        </LoaderContext.Provider>
    )
}