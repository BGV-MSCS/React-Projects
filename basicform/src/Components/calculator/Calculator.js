import "./calculato.scss";
import  ReducerFunction  from "./CalculatorHelper";
import DataDisplayer from "./DataDisplayerComp";
import ButtonHolder from "./ButtonHolder";
export  default function Calculator(){

 return (
    <div className = "container">
       <ReducerFunction>
         <DataDisplayer></DataDisplayer>
         <ButtonHolder></ButtonHolder>
       </ReducerFunction>
    </div>
 );
}