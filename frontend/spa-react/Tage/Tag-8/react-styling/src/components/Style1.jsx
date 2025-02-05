import style from '../styles/Style1.module.css'
const Style1 = () => {
    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '20px',
        borderRadius: '5px'
      };
  return (
    <>Style1
        <div style={divStyle}>
            <h1>React Styling</h1>
            <p style={{
                color: 'green',
                fontSize: '20px'
            }}>React has a few different ways to style components. You can use regular CSS files, inline styles, or CSS-in-JS libraries.</p>
        </div>
        <div className="app-container">
            <div style={divStyle}>
            <h2>Additional Section 1</h2>
            <p>This is another section styled similarly.</p>
            </div>
            <div style={divStyle}>
            <h2>Additional Section 2</h2>
            <p className={`${style.p} ${style.app}`}>This is yet another section styled similarly.</p>
            </div>
        </div>
    </>
  )
}

export default Style1