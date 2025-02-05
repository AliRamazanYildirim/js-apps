import "../styles/MyStyle.css"

const MyStyle = ({children}) => {
  return (
    <div>
        <button className="my-style">{children}Klick mich</button>
    </div>
  )
}

export default MyStyle