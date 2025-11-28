import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compounents/Header'
import Trans from './compounents/Trans'
function App() {
  return (
    <div className='container  w-full bg-white rounded-t-4xl'>
    <Header />
    <Trans />
    </div>
  )
}

export default App
