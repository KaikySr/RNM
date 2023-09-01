import { useState } from "react"

export default function Counter()
{
    var [num, setNum] = useState(0);
    
    function handleFive()
    {
        setNum(5);
    }

    function handleZero()
    {
        setNum(0);
    }

    const RenderButtonZero = () => 
    {
        if(num === 0)
        return <button disabled onClick={handleZero}>Clique aqui</button>
        return <button onClick={handleZero}>Clique aqui</button>
    }

    const RenderButtonFive = () => 
    {
        if(num === 5)
        return <button disabled onClick={handleFive}>Clique aqui</button>
        return <button onClick={handleFive}>Clique aqui</button>
    } 

    return (
        <>
            <RenderButtonZero />
            {num}
            <RenderButtonFive />
        </>
    )
}
