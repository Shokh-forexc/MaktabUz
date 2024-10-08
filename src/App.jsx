import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/UserLayout'
import { MenuMaktab } from './Components/MenuMaktabUz.jsx'
// import { Rules } from './Components/Rules.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MenuMaktab/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
