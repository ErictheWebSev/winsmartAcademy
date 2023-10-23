import { useState } from 'react'

const RegistrationForm = ({ submit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    experience: '',
  })
  
  const [error, setError] = useState({})
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }
  
  const handleExperienceClick = (value) => {
    setFormData({...formData, experience: value})
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    formData.first_name.trim() === '' ? newErrors.first_name = 'First Name is required' : ''
    
    formData.last_name.trim() === '' ? newErrors.last_name = 'Last Name is required' : ''
    
    formData.email.trim() === '' ? newErrors.email = 'Email is required' : ''
    
    
    formData.phone_number.trim() === '' || formData.phone_number.trim().length < 11 ? newErrors.phone_number = 'Phone Number is invalid' : ''
    
    formData.experience.trim() === '' ? newErrors.experience = 'The experience field is required' : ''
    
    formData.email.trim().includes('@gmail.com') ? '' : newErrors.email = 'Email is invalid'
    
    
    
    setError(newErrors)
    return Object.keys(newErrors).length === 0;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm();
    if (isValid) {
      submit(formData)
    }
  }
  
  return (
          <form className="mt-16 px-5" method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 mb-4">
            <label className="label">First Name</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange}
              className="input"
              placeholder="John"
            />
          </div>
          
          <div className="flex flex-col space-y-4 mb-6">
            <label className="label">Last Name </label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} className="input" placeholder="Smith"  />
          </div>
          
          <div className="flex flex-col space-y-4 mb-6">
            <label className="label">Phone Number</label>
            <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} className="input" placeholder="Your Phone Number"  />
          </div>
          
          
          <div className="flex flex-col space-y-4 mb-6">
            <label className="label">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="input" placeholder="email@example.com"  />
          </div>
          
          <div className="flex flex-col space-y-4 mb-6">
            <label className="label"> Trading Experience</label>
            <div className="flex space-x-3">
              <a
              onClick={() => handleExperienceClick('beginner')}
              className={`btn ${formData.experience === 'beginner' ? 'active' : ''}`}>Beginner</a>
              <a
              onClick={() => handleExperienceClick('intermediate')}
              className={`btn ${formData.experience === 'intermediate' ? 'active' : ''}`}>Intermediate</a>
              <a
              onClick={() => handleExperienceClick('expert')}
              className={`btn ${formData.experience === 'expert' ? 'active' : ''}`}>Expert</a>
            </div>
          </div> 
          
          { Object.keys(error).map((fieldName) => (
            <div key={fieldName} className="error-message">
              {error[fieldName]}
            </div>
           )) }
          
          <div>
            <button type="submit" className="w-full text-lg bg-gradient-to-r from-purpleP to-blue-600 h-14 px-3 py-4 text-center text-white rounded-lg mb-3 outline-none">Register</button>
          </div>
        </form>
  )
}

export default RegistrationForm