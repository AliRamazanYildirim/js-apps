import './App.css'
import ReducerComponent from './components/ReducerComponent'
import Content from './components/usecontext/Content'
import {NumberProvider} from './components/usecontext/NumberProvider'

function App() {

  return (
    <NumberProvider>
     <ReducerComponent />
     <Content />
    </NumberProvider>
  )
}

export default App
