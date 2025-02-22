const SingleUser = ({ user }) => {
  return (
    <div>
      <div className="single-user">
        <img src={user.picture.large} alt="bild" />
        <div className="user-info">
          <h2>{user.name.first} {user.name.last}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.location.city}</p>
          <p>{user.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
