import "./aside.css"
import React from "react";
import { useState, useEffect } from "react";
import Input from "./Input";

export const PerrosDiv = () => {
  const [breeds, setBreeds] = useState([]);
  const callBreeds = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    let dataBreeds = await response.json();
    setBreeds(Object.entries(dataBreeds.message));
  };

  useEffect(() => {
    callBreeds();
  }, []);

  const [display, setDisplay] = useState("block")

  function handleClick (){
    if(display === "block"){
        setDisplay("none")
    } else {
        setDisplay("block")
    }
  }

  return(
    <>
        <div className="filtrosRazas">
        <div className="item-list">
            {breeds.map((breed) => {
                if(breed[1].length === 0){
                    return (
                        <Input breed={breed[0]}/>
                    );
                } else {
                    return (
                        <li className="liRazas">
                            <label>
                                <input className="checkbox" type="checkbox"/>{breed[0]}
                            <span onClick={handleClick} className="span">Mostrar sub-razas</span></label>
                            <ul style={{display: display}} className="subRazas">
                                {breed[1].map((subBreed) => {
                                    return (
                                        <Input breed={subBreed}/>
                                    )
                                })}
                            </ul>
                        </li>
                        )
                    }
                })}
            </div>
            <div className="contenedorTitulo">
                <div className="titleContainer">
                    <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
                    <h2 className="welcomeMessage">Tu mejor amigo podría estar aquí</h2>
                    <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
};

export default PerrosDiv;