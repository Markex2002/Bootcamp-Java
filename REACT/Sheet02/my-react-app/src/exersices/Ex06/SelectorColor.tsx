function SelectorColor({onColorChange} : {onColorChange: (v: string) => void}) {
    return(
        <div>
            <p></p>
            <input type="color" onChange={e => onColorChange(e.target.value)}/>
            <p></p>
        </div>
    )  
}

export default SelectorColor;   