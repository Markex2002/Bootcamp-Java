function CajaColor({color} : {color: string}) {
    let styles = {
        backgroundColor: color,
        height: 100,
        width: 100,
    }

    return(
    <div style={styles}>
    </div>
    )
}

export default CajaColor