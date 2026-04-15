import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout'
import MonitorLayout from './components/MonitorLayout'
import Dashboard from './Pages/Dashboard'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route element={<MonitorLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;