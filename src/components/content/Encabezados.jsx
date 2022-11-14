import "./encabezados.css"

function Encabezados({text}){
    return (
        <>
            <div className="titleContainer">
                <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
                <h2 className="welcomeMessage">{text}</h2>
                <img className="titleImage" src="https://i.imgur.com/lJtHjm1.png" alt="" />
            </div>
        </>
    )
}

export default Encabezados;