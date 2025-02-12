import { useEffect, useState } from "react";
import "./index.scss";
import { Users } from "./Users/Index.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((result) => result.json())
      .then((json) => setUsers(json.data))
      .catch((erorr) => {
        console.warn(erorr);
        alert("Erorr with users");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <Users
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
      />
      <button className="send-invite-btn">Send proposition</button>
    </div>
  );
}

export default App;
