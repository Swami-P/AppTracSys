import React from "react";

function Input(props){
    return(
        <div>
            <input className="input-style" placeholder={props.placeholder} type={props.type}></input>
        </div>
        
    );
}
export default Input;

