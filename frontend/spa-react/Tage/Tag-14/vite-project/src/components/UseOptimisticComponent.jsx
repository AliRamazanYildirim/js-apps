import axios from 'axios';
import { useState } from 'react';

function UseOptimisticComponent() {
  const [optimisticData, setOptimisticData] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    // Optimistik olarak UI'ı güncelle
    setOptimisticData((prevData) => [...prevData, newItem]);

    // Die tatsächliche Aktualisierung erfolgt hier
    axios
      .post('https://jsonplaceholder.typicode.com/posts', newItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 201) {
          // Wenn der API-Aufruf fehlschlägt, mache das optimistische Update rückgängig
          setOptimisticData((prevData) =>
            prevData.filter((item) => item !== newItem)
          );
        }
      })
      .catch(() => {
        // Fehlerbehandlung bei Netzwerkfehlern
        setOptimisticData((prevData) =>
          prevData.filter((item) => item !== newItem)
        );
      });
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {optimisticData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticComponent;