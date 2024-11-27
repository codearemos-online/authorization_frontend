import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './components/Basic'
import { User } from './utils/auth'
import Rback from './components/Rbac'
import { YearContextProvider } from './contexts/dataContext'
import { CounterContext } from './contexts/counterContext'


function App() {
  const [count, setCount] = useState(0)
  const data: User = { id: 1, role: "moderator" }
  const { counter } = useContext(CounterContext);
  return (
    /*     <Basic /> */


    <YearContextProvider>
      <Rback user={data}></Rback>
      {counter}
    </YearContextProvider>

  )
}

export default App
