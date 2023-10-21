RegistrationForm.js

import React, { useState } from 'react';

function RegistrationForm() {
    // Define state variables to store form input data
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send a POST request to your Django API to register the user
        try {
            const response = await fetch('/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Registration successful, you can handle success here
                alert('Registration successful!');
            } else {
                // Handle registration error
                alert('Registration failed.');
            }
        } catch (error) {
            // Handle fetch or other errors
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Seminar Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;