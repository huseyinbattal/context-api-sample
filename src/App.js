import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";


const data = [
  {
    id: 1,
    color: "pink",
  },
  {
    id: 2,
    color: "salmon"
  },
  {
    id: 3,
    color: "aqua",
  },
];

function App() {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => {
    setUsers(
      users.map((item) =>
        item.id === id ? { ...item, color: color } : item
      )
    );
  };

  return (
    <UserContext.Provider value={{changeColor,users}}>
      <div className="App">
      <h1>Welcome</h1>
      <UserList />
    </div>
    </UserContext.Provider>
  );
}

export default App;
