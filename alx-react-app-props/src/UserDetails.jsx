import React, { useContext } from "react";
import UserContext from "./components/UserContext";

function UserDetails() {
  {
    useContext(UserContext);
  }
  return (
    <div>
      <p>Name: {this.name}</p>
      <p> Email: {this.email}</p>
    </div>
  );
}

export default UserDetails;
