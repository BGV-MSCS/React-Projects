import "./scss/App.scss";
import CounterApp from "./components/counter";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router";

export default function App(){
   const navigate = useNavigate();
 return (
  <div className="FirstApp">
   <Routes>
     <Route path="/" element={<CounterApp/>}></Route>
     <Route path="/user" element={<div>Hello ia /users<button onClick={()=>{
      navigate(-1);
     }}>back</button></div>}/>
   </Routes>
  </div>
 );
}