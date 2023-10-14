import { useState } from 'react'
import './Counter.css'
import './Counter'

export default function CounterButton({by, increment, decrement}){

    return(
        <div className="Counter">
            <div>
            <button className="CounterButton"
             onClick={()=>increment(by)}
             >+{by}</button>
              <button className="CounterButton"
             onClick={()=>decrement(by)}
             >-{by}</button>
            </div>
        </div>
    )
}