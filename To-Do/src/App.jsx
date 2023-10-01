import { useState } from 'react'
import {   Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginView } from './views/login/loginView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView />} />
      </Routes>
    </div>
  )
}

export default App
