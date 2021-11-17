import { count } from "console";
import { useState } from "react";

export function Counter(){

    //Criar um estado, a funcao pra alterar o seu valor e passar o valor inicial
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1)
    }


    return(
        <button onClick={increment}>{counter}</button>
    )
}