import { getPackagesRouteData } from "./PackagesRouteData";

export const getPackagesRouteLoader = async (dataPass: any) => {
    const packagesRouteData = getPackagesRouteData({})
    const findMatchingObject = (obj: any, key: string, value: any): any => {
        if (obj[key] === value) {
            return obj
        }
        if (obj.nested) {
            for (const nestedKey in obj.nested) {
                const result = findMatchingObject(obj.nested[nestedKey], key, value);
                if (result) {
                    return result
                }
            }
        }
        return null
    }
    return findMatchingObject(packagesRouteData.packages, "route", dataPass.type)
}