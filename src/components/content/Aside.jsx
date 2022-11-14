import "./aside.css"
import React from "react";
import { useState, useEffect } from "react";
import Input from "./Input";
import InputBackUp  from "./InputBackUp";
import Encabezados from "./Encabezados"
import BasicExample from "./Items";

export const PerrosDiv = () => {
  const [breeds, setBreeds] = useState([]);
  const callBreeds = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    let dataBreeds = await response.json();
    setBreeds(Object.entries(dataBreeds.message));

    const displayImages = async () => {
        let response = await fetch(`https://dog.ceo/api/breed/${dataBreeds}/images/`);
        let dataImages = await response.json();
    };
  };

  const [checkedState, setCheckedState] = useState(
    new Array(breeds.length).fill(false)
    );

    function handleOnChange (position){
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item)

        setCheckedState(updatedCheckedState)
    }

  useEffect(() => {
    callBreeds();
  }, []);

  const [display, setDisplay] = useState("none")

  function handleClick (){
    if(display === "none"){
        setDisplay("block")
    } else {
        setDisplay("none")
    }
  }

  return(
    <>
        <div className="filtrosRazas">
            <div className="item-list">
                {breeds.map((breed, index) => {
                    if(breed[1].length === 0){
                        return (
                            <Input breed={breed[0]} isChecked={checkedState[index]} handleOnChange={(index) => handleOnChange(index)}/>
                        );
                    } else {
                        return (
                            <li className="liRazas">
                                <label>
                                    <InputBackUp breed={breed[0]} isChecked={checkedState[index]} handleOnChange={(index) => handleOnChange(index)}/>
                                <span onClick={handleClick} className="span">Mostrar sub-razas</span></label>
                                <ul style={{display: display}} className="subRazas">
                                    {breed[1].map((subBreed, index) => {
                                        return (
                                            <Input breed={subBreed} isChecked={checkedState[index]} handleOnChange={(index) => handleOnChange(index)}/>
                                        )
                                    })}
                                </ul>
                            </li>
                            )
                        }
                    })}
                </div>
                <div className="contentContainer">
                    <div className="contenedorTitulo">
                        <Encabezados text="Tu mejor amigo podría estar aquí"/>
                    </div>
                    <div className="contenedorCards">
                    {breeds.map((breed, subBreed) => {
                        return (
                            <>
                                <BasicExample text={breed[0].toUpperCase()} imageUrl="https://i.imgur.com/Seid3PG.jpg" className="cardsGeneradas"/>
                            </>
                        )
                    } )}
                    </div>
                </div>
        </div>
    </>
  )
};

export default PerrosDiv;

// {`https://dog.ceo/api/breed/${breed}/images/`}