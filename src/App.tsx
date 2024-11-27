import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './components/Basic'
import { User } from './utils/auth'
import Rback from './components/Rbac'
import { YearContextProvider } from './contexts/dataContext'


function App() {
  const [count, setCount] = useState(0)
  const data: User = { id: 1, role: "moderator" }

  return (
    /*     <Basic /> */


    <YearContextProvider>
      <Rback user={data}></Rback>
    </YearContextProvider>

  )
}

export default App
