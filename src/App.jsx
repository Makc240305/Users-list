import { useEffect, useState } from "react";
import "./index.scss";
import { Users } from "./Users/Index.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((result) => result.json())
      .then((json) => setUsers(json.data))
      .catch(erorr =>{
        console.warn(erorr);
        alert('Erorr with users')
      })
  }, []);

  return (
    <div className="App">
      <Users />
      <button className="send-invite-btn">Send proposition</button>
    </div>
  );
}

export default App;
