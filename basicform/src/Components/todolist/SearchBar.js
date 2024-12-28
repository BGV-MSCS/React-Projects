import { useContext } from "react";
import { InputFieldContext } from './todoHelper';
import { useTransition } from "react";
import { ItemsContext } from "./todoHelper";
export default function SearchBar(){
    const { textField, setTextField } = useContext(InputFieldContext);
    const [isPending, startTransition] = useTransition()
    const {  dispatch } = useContext(ItemsContext)
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
        <form>
            <input type="text" placeholder="What need to add" name="searchBar" required value={textField} onChange={(e)=>{
                setTextField(e.target.value);
            }} disabled = { isPending}></input>
           <button onClick = {handleAdd} disabled = { isPending}>{isPending ? "Ading......": "Add"}</button>
           <div className="popupHolder"></div>
        </form>

    );
}