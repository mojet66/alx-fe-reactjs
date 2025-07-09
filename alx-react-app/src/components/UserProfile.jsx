const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
export default UserProfile;
