import React , { Fragment, useState } from "react";
import "../scss/counter.scss";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmmount, selectCount } from "../features/counter/counterSlice";
import { useNavigate } from "react-router";

export default function CounterApp(){
    const value:number = useAppSelector(selectCount);
    const [inputvalue, setInputValue] = useState<number>(0);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log("Redux State Value:", useAppSelector((state) => state.counter.value));
    function onChangeHandler(data: number):void{
       setInputValue(data);
    }
    function handleIncrement():void{
        dispatch(increment());
    }
    function handleDecrement():void{
        dispatch(decrement());
    }
    function handleIncreaseByValue():void{
        dispatch(incrementByAmmount(inputvalue));
    }
    return (
    <Fragment>
        <h1>Welcome to the counter app</h1>
        <div className="container">
            <button className="decrease" onClick={handleDecrement}>-</button>
            <p>{value}</p>
            <button className="increase" onClick={handleIncrement}>+</button>
        </div>
        <input type="text" value={inputvalue} onChange={(e)=>{
            onChangeHandler(Number(e.target.value));
        }}></input>
        <button className="IncreaseByadd" onClick={handleIncreaseByValue}>Increase BY addition</button>
      <button onClick={()=>{
        navigate('/user');
      }}>navigate</button>
    </Fragment>
);
}