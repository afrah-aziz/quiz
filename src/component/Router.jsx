import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Admin from './Admin'
import Question from './Question'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Admin/>} />
            <Route exact path="/question" element={<Question/>} />

            </Routes>

        </BrowserRouter>

    </div>
  )
}
