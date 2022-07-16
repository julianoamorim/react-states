import {useState} from 'react';

function SmartCounter(){
    //const[variavel, getVariavel()] = useState(valorInic) -> Funcao enganxada na variavel
    const[quantidade, maisQuantidade] =  useState(1)

    return(
        <div>
            {/* variavel atualizada automaticamente, nao necessita innerHTML */}
            <h1>{quantidade}</h1>
            <button onClick={()=>maisQuantidade(quantidade+1)}>Aumentar</button>
        </div>
    );
}

export default SmartCounter;