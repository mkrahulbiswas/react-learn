import { createContext, useState } from "react";
import { getPackagesRouteData } from "../Helpers/RouteHelper/PackagesRoute/PackagesRouteData";
export const RouteContext = createContext({})
export const RouteContextProvider = (props: any) => {
    const [routePaths, setRoutePaths] = useState(() => {
        let routeData: any = getPackagesRouteData({})
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