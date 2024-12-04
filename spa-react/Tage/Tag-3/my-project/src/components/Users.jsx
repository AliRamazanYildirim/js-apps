import { useState } from "react";

const Users = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const email = event.target.value;
    if(email && !email.includes('@')){
      alert('Email should contain@')
    }else{
      setInputValue("Welcome");
    }
  };

  return (
    <div>
      <input
        type="email"
        onBlur={handleInputChange}
        placeholder="Enter something"
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default Users;