import SteyledButton from "./Button"

const SteyledList = () => {
    const steyledList = {
        color: 'red',
        backgroundColor: 'lightgray',
        padding: '20px',
        borderRadius: '5px'
    }
    const liStyle = {
        color: 'green',
        fontSize: '20px'
    }
    const combineStyle = {
        ...steyledList,
        ...liStyle
    }
  return (
    <>SteyledList
        <ul style={combineStyle}>
            <h2 style={steyledList}>Product</h2>
            <li style={liStyle}>TV</li>
            <li style={{...liStyle, color:'red', fontWeight:'bold'}}>Laptop</li>
            <li>Smart Phone</li>
        </ul>
        <SteyledButton>Button</SteyledButton>
        <SteyledButton white>Button</SteyledButton>
    </>
  )
}

export default SteyledList