import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //! 1.Weg async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result.slice(0, 5));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(fetchData, 5000);
  }, []);

  return (
    <div>
      <h1>Fetching Data</h1>
      {isLoading ? (
        <>
          <SyncLoader color="#f9b507" />
          <p>Loading...</p>
        </>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchingData;
