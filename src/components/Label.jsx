import React from "react";

function Label(props){
    return(
        <div className="label-style">
            <p>{props.name}<span>{props.mandatory}</span></p>
        </div>
    );
}

export default Label;