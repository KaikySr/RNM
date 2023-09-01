import { useState, useRef } from "react";
import { Input, Inputs, Salvar} from "./styled";

export default function AddPayment(){    
    const inputRef = useRef(null)
    const [nome, setNome] = useState('');
    const [data, setData] = useState(new Date());
    const [valor, setValor] = useState(0);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return(
        <>
            <Inputs>
                <Input><input type='text' placeholder='Insira o nome da Carteira' onChange={(e) => setNome(e.target.value)}/></Input>
                <Input><input type='date' placeholder='Insira uma data' onChange={(e) => setData(e.target.value)}/></Input>
                <Input><input type='number' placeholder='Insira um valor' onChange={(e) => setValor(e.target.value)}/></Input>
            </Inputs>
            
            <Salvar>
                <button onClick={handleClick}>Salvar</button>
            </Salvar>
        </>
    )   
} 