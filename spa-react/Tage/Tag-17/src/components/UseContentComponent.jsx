import React, { createContext, useContext } from 'react';

const MyContent = createContext();

const UseContentComponent = ({ children }) => {
  const value = { name: 'John', age: 25 };

  return (
    <MyContent.Provider value={value}>
      {children}
    </MyContent.Provider>
  );
};

const MyComponent = () => {
  const contextValue = useContext(MyContent);

  return (
    <div>
      <p>Name: {contextValue.name}</p>
      <p>Age: {contextValue.age}</p>
    </div>
  );
};

export { UseContentComponent, MyContent, MyComponent };