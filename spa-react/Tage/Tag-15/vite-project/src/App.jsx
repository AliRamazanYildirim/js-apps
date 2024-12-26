import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;