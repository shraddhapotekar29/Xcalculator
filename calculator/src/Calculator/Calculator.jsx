import React from "react";
import style from "./Calculator.module.css"
import { useState } from "react";
const Calculator=()=>{
    const[val,setVal]=useState("");
    const[resultData,setResultData]=useState("");
    const result=()=>{
        setResultData(eval(val).toString());
    }
    return(<div className={style.Calculator}>
    <h1>React Calculator</h1>
    <input type="text" value={val}  />
    <br />
    <div>{resultData}</div>
    <div className={style.btnWrap}>
    <button value={7} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>7</button>
    <button value={8} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>8</button>
    <button value={9} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>9</button>
    <button value={"+"} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>+</button>
    
    <button value={4} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>4</button>
    <button value={5} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>5</button>
    <button value={6} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>6</button>
    <button value={"-"} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>-</button>
    
    <button value={1} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>1</button>
    <button value={2} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>2</button>
    <button value={3} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>3</button>
    <button value={"*"} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>*</button>
    
    <button value={"C"} className={style.btnStyle} onClick={()=>{setVal(""); setResultData("");}}>C</button>
    <button value={0} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>0</button>
    <button value={"="} className={style.btnStyle} onClick={result}>=</button>
    <button value={"/"} className={style.btnStyle} onClick={(e)=>{setVal((prevVal)=>prevVal+e.target.value)}}>/</button>
    
    </div>
    </div>)
}
export default Calculator;