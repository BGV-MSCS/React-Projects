import Button from './Button';
import  "./calculato.scss";
export default function ButtonHolder(){
    const buttons = ["AC/C", "+/-", "%", "/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
    return (
        <div className = "buttonHolder">
           {
            buttons.map((ele,index)=>{
                if("+-*/=".includes(ele)){
                    return <Button key={index} name={ele} className = "specialbutton"></Button>
                }else if("AC/C+/-%".includes(ele)){
                    return <Button key={index} name={ele} className="specialbutton2"></Button>
                }else{
                    return <Button key={index} name={ele} className="normalbutton"></Button>
                }
            })
           }
        </div>
    );
}