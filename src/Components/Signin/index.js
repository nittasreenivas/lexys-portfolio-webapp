import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signin(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [user,setUser] = useState(false);
  const handleLogin = () => {
    if (userName && password) {
      props.setUser(userName);
      console.log("login succesful");
    } else {
      console.log("login failed");
    }
  };
  // if(userName && password){
  //   setUser(true)
  //   console.log('login succesful')
  // } else {
  //   console.log('login failed');
  // }
  if (props.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h2> Signin </h2>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleLogin}>Press </button>
      </div>
    );
  }
}
