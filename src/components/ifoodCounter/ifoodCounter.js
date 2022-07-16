import React, {useEffect, useState} from 'react'
import '../ifoodCounter/ifoodCounter.css'

export default function IfoodCounter() {
    var[value, setValue] = useState(1)  
    const[buttonStyle, setButtonStyle] = useState("counter-button-plus-active")

    useEffect(() =>{
        document.getElementById("moeda").innerHTML = 2.00*value;
    },[value])

    function diminuir(){
        value > 0 ? setValue(value-1)
        :
        (setButtonStyle("counter-button-plus-desactive"))   
    }
    function aumentar(){
        value < 10 ? setValue(value+1) : setValue(value=10);
    }

    return (
        <div>
            <div className="countex-wrapper">
                <button className={buttonStyle} onClick={diminuir}>-</button>
                <p>{value}</p>
                <button className="counter-button-plus-active" onClick={aumentar}>+</button>   
            </div>  
            <button id="moeda">12</button> 
        </div> 
        )
}
