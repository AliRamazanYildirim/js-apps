import useUserStore from "../store/useUserStore";

const SingleUser = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.login.uuid} className="single-user">
          <img src={user.picture.large} alt="bild" />
          <div className="user-info">
            <h2>{user.name.first} {user.name.last}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.location.city}</p>
            <p>{user.location.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleUser;