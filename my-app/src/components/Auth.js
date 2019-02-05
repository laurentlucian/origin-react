import React, { Component } from "react";
import "../css/auth.css";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    auth: {}
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleClick = e => {
    e.preventDefault();

    fetch("/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json =>
        this.setState({ auth: json }, () => {
          if (this.state.auth.valid === true) {
            this.props.history.push("/twitch");
          }
        })
      );
  };

  render() {
    return (
      <div className="auth">
        <div className="box">
          <form onSubmit={this.onSubmit}>
            <div className="field">
              <p className="control">
                <input
                  name="username"
                  className={`input ${this.state.auth.valid === false ? "is-danger" : ""}`}
                  type="text"
                  placeholder="Username"
                  onChange={this.onChange}
                />
              </p>
            </div>

            <div className="field">
              <p className="control">
                <input
                  name="password"
                  className={`input ${this.state.auth.valid === false ? "is-danger" : ""}`}
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  type="submit"
                  className={`button ${
                    this.state.auth.valid === false ? "is-danger" : "is-success"
                  }`}
                  onClick={this.handleClick}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
