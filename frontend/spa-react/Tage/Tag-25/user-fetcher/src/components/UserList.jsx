import { useEffect, useState } from "react";
import axios from 'axios';
import SingleUser from "./SingleUser";


const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const url = 'https://randomuser.me/api/?results=10'

    const fetchUsers = async () => {
        try {
            const res = await axios.get(url);
            console.log(res);
            setUsers(res.data.results);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.login.uuid}>
                            <SingleUser user={user} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UserList;