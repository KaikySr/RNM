import { useEffect, useState, useRef } from "react"

function Text(props){
    /////////////////Desafio 2/////////////////
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function somar()
    {
        setResult(Number(num) + Number(num2));
    }
    function subtracao()
    {
        setResult(Number(num) - Number(num2));
    }
    function multiplicacao()
    {
        setResult(Number(num) * Number(num2));
    }
    function divisao()
    {
        setResult(Number(num) / Number(num2));
    }
    ///////////////////////////////////////////

    /////////////////UseEffect/////////////////
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        setSoma(num+num2)
    }, [num, num2])
    ///////////////////////////////////////////

    ///////////////////UseRef//////////////////
    const [name, setName] = useState('');
    const refInput = useRef(null);

    function handleName(){
        if(name.length<5)
            refInput.current.focus();
    }
    ///////////////////////////////////////////

    /////////////////Desafio 3/////////////////
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() =>{
            setCounter(c => c+1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        document.title = counter
        props.setShow(true);
    }, [counter])
    ///////////////////////////////////////////

    return (
        <>
            <form classname='Desafio 2'>
                <label>Insira um número</label>
                <input onChange={(e) => setNum(e.target.value)}/><br/><br/>

                <label>Insira outro número</label>
                <input onChange={(e) => setNum2(e.target.value)}/><br/><br/>

                <button onClick={somar}>+</button><br/><br/>

                <button onClick={subtracao}>-</button><br/><br/>

                <button onClick={multiplicacao}>*</button><br/><br/>

                <button onClick={divisao}>/</button><br/><br/>

                {result}
            </form>

            <form classname='useEffect'>
                <input 
                    type='number'
                    value={num}
                    onChange={(e) => setNum(Number(e.target.value))}
                />
                <input 
                    type='number'
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />

                Soma: {soma}
            </form>

            <form classname='useRef'>
                <input 
                    ref={refInput}
                    onBlur={handleName}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>

            <form className='Desafio 3'>
                {counter}
            </form>
        </>
    )
}

//setInterval
export default Text;
