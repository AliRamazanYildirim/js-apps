import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Login from './components/Login'
import ProductList from './components/ProductList'
import ThemeSwitcher from './components/ThemeSwitcher'
import useThemeStore from './store/useThemeStore'


function App() {
  const { mode } = useThemeStore();

    document.body.className = mode;

  return (
    <div className={`app ${mode}`}>
      <Header />
      <Login />
      <ProductList />
      <Cart />
      <ThemeSwitcher />
    </div>
  )
}

export default App
