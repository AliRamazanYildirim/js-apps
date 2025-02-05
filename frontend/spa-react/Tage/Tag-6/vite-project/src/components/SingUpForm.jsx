import { useState } from 'react'

const SingUpForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Der Code zur Verarbeitung von Formulardaten wird hier eingefügt
    };
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
         SingUpForm <br />
        <input type="text" name="firstname" placeholder='Firstname' value={formData.firstname} onChange={handleChange}/><br />
        <input type="text" name="lastname" placeholder='Lastname' value={formData.lastname}  onChange={handleChange} /><br />
        <input type="email" name="email" placeholder='E-mail' value={formData.email}  onChange={handleChange}/><br />
        <button type='submit'  >Send</button>
    </form>
    </>
  )
}

export default SingUpForm