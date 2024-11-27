import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './components/Basic'
import { User } from './utils/auth'
import Rback from './components/Rbac'

function App() {
  const [count, setCount] = useState(0)
  const data: User = { id: 1, role: "moderator" }

  return (
/*     <Basic /> */
    <Rback user={data}></Rback>
  )
}

export default App
