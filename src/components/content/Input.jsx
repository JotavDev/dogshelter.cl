import React from "react";
import "./input.css";

function Input({breed , handleOnChange , isChecked}){

    return (
        <>
        <li className="liRazas">
            <label>
                <input 
                    checked={isChecked} 
                    onChange={() => handleOnChange()}
                    className="checkbox" 
                    type="checkbox"/>{breed}
            </label>
        </li>
        </>
    );
}

export default Input;