import axios from 'axios';
import { useState } from 'react';

const SingUpFormWithApi = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            setResponseMessage('Form submitted successfully!');
            console.log('Form Data:', response.data);
        } catch (error) {
            setResponseMessage('Error submitting form');
            console.error('There was an error!', error);
        }
    };

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            SingUpForm <br />
            <input type="text" name="firstname" placeholder='Firstname' value={formData.firstname} onChange={handleChange}/><br />
            <input type="text" name="lastname" placeholder='Lastname' value={formData.lastname}  onChange={handleChange} /><br />
            <input type="email" name="email" placeholder='E-mail' value={formData.email}  onChange={handleChange}/><br />
            <button type='submit'>Send</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
        </>
    )
}

export default SingUpFormWithApi;