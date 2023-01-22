import { createContext, useContext, useReducer } from "react"
import { contextReducer } from "./contextReducer";
import data from "../data/data.json"

    export const ProductsContex = createContext();


    const Context = ({children}) => {

    const [state, dispatch] = useReducer(contextReducer, {

        allData : data,
        arr: [],

    })

    console.log(state)


    return (
        <ProductsContex.Provider value={{state, dispatch}} > {children} </ProductsContex.Provider>
    )
    }

    export default Context

    export const HookContext = () => {

        return useContext(ProductsContex)
    }