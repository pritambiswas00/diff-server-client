import { useState } from 'react';
import './App.scss'
import MainApp from './MainApp/MainApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <MainApp/>
    </div>
  )
}

export default App
