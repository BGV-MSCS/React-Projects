import { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export default function ReducerFunction({children}){
    const [ operandA , setOperandA ] = useState(0);
    const [ operandB , setOperandB ] = useState(0);
    const [currentOperator, setCurrentOperator ] = useState("+");
    const [isEqualClicked , setIsEqualClicked ] = useState(false);
    const value = {
        operandA,
        setOperandA, 
        operandB, 
        setOperandB, 
        currentOperator,
        setCurrentOperator,
        isEqualClicked , 
        setIsEqualClicked,
    }
    return (
        <CalculatorContext.Provider value= { value }>
            {children}
        </CalculatorContext.Provider>
    );
}
