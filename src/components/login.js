import React from "react";
import "../App.css";

class Login extends React.Component {
  render() {
    const lgform = (
      <form>
        <input id="login" type="text" placeholder="Login" />
        <input id="password" type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );
    return (
      <div className="App">
        <div className="App-header">Login</div>
        <div className="App-intro">{lgform}</div>
      </div>
    );
  }
}
export default Login;
