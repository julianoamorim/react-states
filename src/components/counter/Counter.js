function Counter(){
    
    let quantidade = 10;

    function soma(){
        quantidade = quantidade + 1;
        document.getElementById("counter-box").innerHTML = quantidade;
    }

    return(
        <div>
            <h1 id="counter-box">{quantidade}</h1>
            <button onClick={soma}>Aumentar</button>
        </div>
        
    );
}

export default Counter