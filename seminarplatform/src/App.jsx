import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import RegistrationPage from './Pages/Register'

function App() {
// const [data, setData] = useState([])
// 
// 
// useEffect(() => {
//   fetch('http://localhost:8000/api/users')
//   .then(res => res.json())
//   .then(users => {
//     setData(users)
//   })
// }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
