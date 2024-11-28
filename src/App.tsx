import './App.css'
import { AuthContextProvider } from './contexts/authContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    /*     <Basic /> */
    <AuthContextProvider>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </AuthContextProvider>

  )
}

export default App
