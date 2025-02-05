import  { useState, useRef, useEffect } from "react";

const FormWithPreviousValue = () => {
    const [inputValue, setInputValue] = useState("");
    const prevInputValueRef = useRef("");

    useEffect(() => {
        prevInputValueRef.current = inputValue;
    }, [inputValue]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Current Value: {inputValue}</p>
            <p>Previous Value: {prevInputValueRef.current}</p>
        </div>
    );
};

export default FormWithPreviousValue;