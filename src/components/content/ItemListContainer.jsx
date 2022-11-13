import BasicExample from "./Items"; 
import "./itemListContainer.css"
import Button from 'react-bootstrap/Button';

function ItemListContainer (){
    return(
        <>
            <div className="itemListContainer">
                <div className="titleContainer">
                    <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
                    <h2 className="welcomeMessage">Tu mejor amigo podría estar aquí</h2>
                    <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
                </div>
                <div className="puppiesContainer">
                    <BasicExample/>
                    <BasicExample/>
                    <BasicExample/>
                    <BasicExample/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;