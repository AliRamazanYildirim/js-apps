import { useContext } from 'react';
import { MyContent } from './UseContentComponent';

const MyComponent = () => {
  const contextValue = useContext(MyContent);

  const { name, age } = useContext(MyContent);

  return (
    <div>
      <p>Name: {contextValue.name}</p>
      <p>Age: {contextValue.age}</p>
      <buttuon onClick={() => console.log(name, age)}>Log</buttuon>
    </div>
  );
};

export default MyComponent;