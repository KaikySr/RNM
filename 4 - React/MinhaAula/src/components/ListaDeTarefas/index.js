import { useRef, useState } from "react"

function ListaDeTarefas() 
{
    const inputRef = useRef(null)
    const [tarefa, setTarefa] = useState('')

    const handleClick = () => {
        setTarefa(inputRef.current.value);
    };

    return (
        <div>
            <label>Insira uma tarefa</label><br/>
            <input 
                ref={inputRef}
                type="text"
            />
            <h2>Tarefas:<br/>{tarefa}</h2>

            <button onClick={handleClick}>enviar</button>
           
        </div>
    );
}
export default ListaDeTarefas;