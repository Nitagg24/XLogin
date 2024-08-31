import React, { useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successfullLogin, setsuccessfullLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setsuccessfullLogin(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      {!successfullLogin ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
};

export default XLogin;
