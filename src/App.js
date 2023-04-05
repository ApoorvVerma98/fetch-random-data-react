import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random User Data</h1>
      <p>Name: {userData.name?.first} {userData.name?.last}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
}

export default App;
