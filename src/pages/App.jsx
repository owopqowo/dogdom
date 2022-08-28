import './App.scss'
import { useState } from 'react'
import Home from './Home';
import Login from './Login'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="app">
      {isLogin ? <Home /> : <Login />}
      ddd
    </div>
  )
}

export default App
