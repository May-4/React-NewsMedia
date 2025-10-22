import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import { BlogForm } from './screens/BlogForm'

function App() {

  return (
    <>
      <NavBar />
      <BlogForm />
    </>
  )
}

export default App
