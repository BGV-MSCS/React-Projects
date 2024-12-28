import { CalculatorContext } from "./CalculatorHelper";
import { useContext } from "react";
export default function Button({name ,className}){
    const {
        operandA,
        setOperandA, 
        operandB, 
        setOperandB, 
        currentOperator,
        setCurrentOperator,
        isEqualClicked , 
        setIsEqualClicked,
    } = useContext(CalculatorContext);

function handleClick(type){
    console.log(Number("234.5"));
   switch(type){
    case "0": isEqualClicked?setOperandB(operandB + "0"):setOperandA(operandA + "0");
              break;
    case "1": isEqualClicked?setOperandB(operandB + "1"):setOperandA(operandA + "1");
              break;
    case "2": isEqualClicked?setOperandB(operandB + "2"):setOperandA(operandA + "2");
             break;
    case "3": isEqualClicked? setOperandB(operandB + "3"):setOperandA(operandA + "3");
              break;
    case "4": isEqualClicked ? setOperandB(operandB + "3"):setOperandA(operandA + "3");
              break;
    case "5": isEqualClicked ? setOperandB(operandB + "4"):setOperandA(operandA + "4");
              break;  
    case "6": isEqualClicked ? setOperandB(operandB + "6"):setOperandA(operandA + "6");
              break;  
    case "7": isEqualClicked ? setOperandB(operandB + "7"):setOperandA(operandA + "7");
              break;  
    case "8": isEqualClicked ? setOperandB(operandB + "8"):setOperandA(operandA + "8");
              break;  
    case "9": isEqualClicked ? setOperandB(operandB + "9"):setOperandA(operandA + "9");
              break;  
    case ".": isEqualClicked ? setOperandB(operandB + "."):setOperandA(operandA + ".");
              break;      
    case "+": setCurrentOperator("+");
              setIsEqualClicked(true);
              break; 
    case "-": setCurrentOperator("-");
              setIsEqualClicked(true);
              break;  
    case "/": setCurrentOperator("/");
              setIsEqualClicked(true);
              break;   
    case "*": setCurrentOperator("*");
              setIsEqualClicked(true);
              break;  
    case "%":
             setCurrentOperator("%");
             setIsEqualClicked(true);
            break;
    case "=": {
        let a = Number(operandA);
        let b = Number(operandB);
        if(currentOperator === "+"){
            setOperandA(a+b);
            setOperandB(0);
        }else if(currentOperator === "-"){
            setOperandA(a-b);
            setOperandB(0);
        }else if(currentOperator === "/"){
            setOperandA(a/b);
            setOperandB(0);
        }else if(currentOperator === "*"){
            setOperandA(a * b);
            setOperandB(0);
        }else if(currentOperator === "%"){
            setOperandA(a % b);
            setOperandB(0);
        }
    }     
           break;                                        
    default : setOperandA(0);
              setOperandB(0);
              setIsEqualClicked(false);
              setCurrentOperator("+");
            break;
   }
}
    return (
        <button  onClick = {()=>{
            handleClick(name);
        }} className={className}>{name}</button>
    );
}
