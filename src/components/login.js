import React from "react";
import "../App.css";

class Login extends React.Component {
  render() {
    const lgform = (
      <form onSubmit="#">
        <input id="login" type="text" placeholder="Login" />
        <input id="password" type="password" placeholder="Password" />
        <input id="submit" type="submit" />
      </form>
    );
    return (
      <div className="App">
        <div className="App-header">Login</div>
        <div className="App-header">{lgform}</div>
      </div>
    );
  }
}
export default Login;
