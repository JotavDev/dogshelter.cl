import React from "react";

function Input({breed}){
    return (
        <>
        <li className="liRazas">
            <label>
                <input className="checkbox" type="checkbox"/>{breed}
            </label>
        </li>
        </>
    );
}

export default Input;