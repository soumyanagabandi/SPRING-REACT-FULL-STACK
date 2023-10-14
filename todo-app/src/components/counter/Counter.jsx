import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter(){
    const[count, setCount] = useState(0)
     
    function incrementParentCount(by){
        setCount(count + by)
    }

    function decrementParentCount(by){
        setCount(count -  by)
    }

    function resetCount(){
        setCount(0)
    }

    return (
        <>
            <span className="count">{count}</span>
            <CounterButton by = {1} increment = {incrementParentCount} decrement = {decrementParentCount}/>
            <CounterButton by = {2} increment = {incrementParentCount} decrement = {decrementParentCount}/>
            <CounterButton by = {3} increment = {incrementParentCount} decrement = {decrementParentCount}/>
            <button className="CounterButton" onClick={resetCount}>Reset</button>
        </>
    )
}