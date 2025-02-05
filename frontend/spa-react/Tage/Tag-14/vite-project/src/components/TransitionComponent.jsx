import { useState, startTransition } from "react";
import axios from "axios";

const TransitionComponent = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleClick = () => {
        startTransition(async () => {
            await fetchData();
        });
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
            {data && (
                <div>
                    {data.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TransitionComponent;
