import { createContext, useState } from "react";
export const RouteContext = createContext({})
export const RouteContextProvider = (props: any) => {
    const [routePaths, setRoutePaths] = useState({
        packages: 'packages',
        // packages: {

        // }
    })
    return (
        <RouteContext.Provider value={{ routePaths, setRoutePaths }}>
            {props.children}
        </RouteContext.Provider>
    )
}