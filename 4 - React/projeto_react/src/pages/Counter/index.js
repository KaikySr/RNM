import { useState, useContext } from "react"
import Counter from "../../components/Counter";
import Numbers from "../../components/Number";
 
export default function CounterPage(){     
    return (
        <>
            <Counter />
            <Numbers />
        </>
    )
}