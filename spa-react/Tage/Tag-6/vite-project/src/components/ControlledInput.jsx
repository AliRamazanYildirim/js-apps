import { useState } from 'react'

const ControlledInput = () => {
    const [formData, setFormData] = useState({
        name: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
return (
    <>
            <input name="name" value={formData.name} onChange={handleChange} />
            <p>Input: {formData.name}</p>
    </>
)
}

export default ControlledInput