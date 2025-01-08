import { useContext } from "react";
import { CalculatorContext} from './CalculatorHelper';
import './calculato.scss'; 
export default function DataDisplayer(){
    const { operandA, operandB,currentOperator} = useContext(CalculatorContext);
    return (
       <div className = "header">
         <p>{operandA}{currentOperator}{operandB}</p>
       </div>
    );
}