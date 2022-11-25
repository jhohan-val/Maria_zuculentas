import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './assets/component/layout/main'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Main/>
    </section>
  )
}

export default App
