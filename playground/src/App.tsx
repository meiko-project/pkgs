import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentDetailTest1 from '@meiko1/component-detail-test1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ComponentDetailTest1></ComponentDetailTest1>
    </div>
  )
}

export default App
