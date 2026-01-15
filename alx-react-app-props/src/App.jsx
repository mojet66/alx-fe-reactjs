import "./App.css";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = {
    name: "John Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Software developer from NY",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
