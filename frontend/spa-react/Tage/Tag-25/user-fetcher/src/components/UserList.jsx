import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import SingleUser from "./SingleUser";

const UserList = () => {
  const { users, loading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!users || users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div>
        <SingleUser />
    </div>
  );
};

export default UserList;