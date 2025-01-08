import "../scss/buttoncomp.scss";
import { useFormStatus } from "react-dom";
export default function Button({name,action}){
    const { pending } = useFormStatus();
    let ele;
    if(name==="Reset"){
       ele = <button onClick = { action}>{name}</button>
    }else{
        ele = <button formAction = { action } disabled = { pending}>{pending ? "Submittions....":"submit"}</button>
    }
    return (
        ele
    );
}