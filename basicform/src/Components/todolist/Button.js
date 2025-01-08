import { useContext } from "react";
import { ItemsContext } from "./todoHelper";
import { InputFieldContext } from './todoHelper';
import { useTransition } from "react";
   
export default function Button(){
    const [isPending, startTransition] = useTransition()
    const {  dispatch } = useContext(ItemsContext)
    const {
        textField, setTextField
    } = useContext(InputFieldContext);
    function handleAdd(){
        dispatch({
            type: "Added",
            value: textField,
           });
     startTransition(async ()=>{
        await new Promise((resolve,reject)=>setTimeout(resolve, 4000));
       
        setTextField("");
     })
    }
    return (
        <button onClick = {handleAdd} disabled = { isPending}>{isPending ? "Reseting Input......": "Add"}</button>
    );
}