import './App.css'
import ColoredText from './components/ColoredText'
import SteyledList from './components/SteyledList'
import StyledComponent from './components/StyledComponent'
import SteyledButton from './components/Button'
import MyCard from './components/MyCard'

function App() {

  return (
    <>
      <SteyledList /><br />
      <ColoredText isHere={false}/><br />
      <StyledComponent /><br />
      <SteyledButton>Button</SteyledButton> 
      <MyCard title='Adler' imgUrl='https://static.vecteezy.com/ti/gratis-vektor/p1/19166335-adlerkopf-adler-logo-symbol-gaming-logo-elegantes-element-fur-marke-abstrakte-adler-symbole-vektor.jpg' />
    </>
  )
}

export default App
