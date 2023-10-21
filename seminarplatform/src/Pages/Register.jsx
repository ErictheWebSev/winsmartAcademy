import { useState } from 'react'
import RegistrationForm from '../utils/RegistrationForm'

const RegistrationPage = () => {
  const [message, setMessage] = useState('')
  
  const handleSubmit = (formData) => {
    fetch('https://winsmart-academy.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setMessage('Registration Successful check your email')
      alert('Registration Successful check your email')
    }).catch(err => {
      alert(err)
    })
  }
  
  return (
      <div className="max-w-4xl h-full bg-transparent backdrop-blur-3xl mt-6 flex flex-col mx-auto px-2">
        <h1 className="text-2xl text-blue-600 mb-3 text-center font-semibold">Deriv Seminar Registraion</h1>
        <p className="text-gray-400 text-sm text-center font-mono">Register for the upcoming seminar </p>
        
        <RegistrationForm submit={handleSubmit} />
      </div>
  )
}

export default RegistrationPage
