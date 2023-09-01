import { useState } from "react"

function Counter(){
    const [num, setNum] = useState(0);

    function handleZero()
    {
        setNum(0)
    }

    function handleFive()
    {
        setNum(5)
    }

    function increment()
    {
        setNum(num+1)
    }

    function decrement()
    {
        setNum(num-1)
        if(num <= 0)
        {
            setNum(0)
        }
    }

    return (
        <>
            <form classname='Desafio 1'>
                <button onClick={handleZero}>0</button><br/>
                <button onClick={handleFive}>5</button><br/>
                <button onClick={increment}>+1</button><br/>
                <button onClick={decrement}>-1</button><br/>
                {num}<br/>
            </form>
        </>
    )
}

export default Counter;
