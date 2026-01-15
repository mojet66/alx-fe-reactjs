import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  {
    useContext(UserContext);
  }
  return (
    <div>
      <h2>{this.name}</h2>
      <p>Age: {this.age}</p>
      <p>Bio: {this.bio}</p>
    </div>
  );
};
export default UserProfile;
