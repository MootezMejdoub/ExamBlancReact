import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
const Add = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, username });
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
