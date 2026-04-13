import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://127.0.0.1:8000/api/login/", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
      });
  };

  return (
    <>
      <input onChange={(e) => setUsername(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
