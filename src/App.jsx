import { useEffect, useState } from "react";
import "./index.scss";
import { Users } from "./Users/Index.jsx";
import { Success } from "./Users/Success.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

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

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
