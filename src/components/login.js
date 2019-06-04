import React from "react";
import "../App.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "0"
    };
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  signUpSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    this.setState({ value: "1" });
  }

  render() {
    const suform = (
      <form onSubmit={this.signUpSubmit}>
        <input id="login" type="text" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <input id="submit" type="submit" />
      </form>
    );
    const lgform = (
      <form onSubmit="#">
        <input id="login" type="text" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
        <input id="submit" type="submit" />
      </form>
    );
    return (
      <div className="App">
        <div className="App-header">
          {this.state.value === "0" ? "SignUp" : "Login"}
        </div>
        <div className="App-header">
          {this.state.value === "0" ? suform : lgform}
        </div>
      </div>
    );
  }
}
export default Login;
