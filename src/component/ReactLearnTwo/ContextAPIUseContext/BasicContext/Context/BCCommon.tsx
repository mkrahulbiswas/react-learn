import { createContext, useState } from "react";
export const BCCommon = createContext({})
export const BCCommonProvider = (props: any) => {
    const [count, setCount] = useState(10)
    return (
        <BCCommon.Provider value={{ count, setCount }}>
            {props.children}
        </BCCommon.Provider>
    )
}