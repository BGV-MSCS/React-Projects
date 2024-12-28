import { createContext , useReducer } from "react";

export const InputFieldContext = createContext("");
export const ItemsContext = createContext([]);
export const EditingIDContext = createContext(null);
export const ContainerContext = createContext(null);

let nextId=0;
export  function reducerfn(initialState, action){
   switch(action.type){
    case "Added" : {
        return [
            ...initialState,
            { id: nextId++, value: action.value }
        ]
    }
    case "Deleted": {
        return initialState.filter((obj)=>obj.id!==action.id);
    }
    case "Edited": {
        return initialState.map((obj)=>{
            if(obj.id===action.id){
                return {
                    ...obj,
                    value: action.value,
                }
            }else{
                return obj;
            }
        });
    }
    default: throw new Error("Something Went Wrong");
   }
}

export default function Provider({children}){
    const [ items , dispatch ] = useReducer(reducerfn, []);
    let values = {
        items,
        dispatch,
    }
    return (
        <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>
    );
}