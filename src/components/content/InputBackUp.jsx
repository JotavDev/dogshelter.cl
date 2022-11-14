

function InputBackUp({breed , handleOnChange , isChecked}){
    return(
        <>
            <input 
            checked={isChecked} 
            onChange={() => handleOnChange()}
            className="checkbox" 
            type="checkbox"/>{breed}
        </>
    )
}

export default InputBackUp;