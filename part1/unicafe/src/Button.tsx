import React from "react";

type ButtonProps = {
    onclick: () => void;
    name: string;
}

const Button =({onclick, name}:ButtonProps)=>{
    return(
        <button onClick={onclick}>
            {name}
        </button>
    )
}
export default Button;