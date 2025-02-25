import { useState, useEffect } from 'react';
import './App.scss';
import ListItem from './components/ListItem';
import { API_URL as BASE_URL } from './config';

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      console.log({ result });
      setList(result || []); // Direkt result setzen, falls es ein Array ist
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleNewTask = async (evt) => {
    evt.preventDefault();
    setTask("");
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });
      console.log({ res });
      getData();
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  };

  const handleDeleteAll = async (evt) => {
    try {
      await fetch(`${BASE_URL}`, {
        method: "DELETE",
      });
      getData();
    } catch (error) {
      console.error("Error deleting all tasks:", error);
    }
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <form action="">
        <label>
          Add a new task
          <input type="text" value={task} onChange={(evt) => setTask(evt.target.value)} />
        </label>
        <div className='buttonWrapper'>
          <button onClick={handleNewTask}>New task</button>
          <button onClick={handleDeleteAll}>Delete all</button>
        </div>
      </form>
      <div className='listWrapper'>
        <ul>
          {Array.isArray(list) && list.map((el) => (
            <ListItem key={el.id} task={el} getData={getData} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;