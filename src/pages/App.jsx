import { useState } from 'react'
import Home from './Home';
import Login from './Login'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(true);
  }
  const logout = () => {
    setIsLogin(false);
  }
  return (
    <div className="app">
      {isLogin ? <Home logout={logout} /> : <Login login={login} />}
    </div>
  )
}

export default App
