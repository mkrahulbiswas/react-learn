import { createContext, useState } from "react";
import { getRouteData } from "../Helpers/RouteHelper";
export const RouteContext = createContext({})
export const RouteContextProvider = (props: any) => {
    const [routePaths, setRoutePaths] = useState(() => {
        let routeData: any = getRouteData({})
        if (routeData != null) {
            return routeData
        } else {
            return [];
        }
    })
    return (
        <RouteContext.Provider value={{ routePaths, setRoutePaths }}>
            {props.children}
        </RouteContext.Provider>
    )
}