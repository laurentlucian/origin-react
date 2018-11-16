import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    bye: false
  };

  render() {
    const hello = [];
    for (let i = 0; i < this.state.count; i++) {
      hello.push("Hey");
    }
    return (
      <div className="container box" style={{ width: 200, marginTop: 25 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <span className="is-size-4">{this.formatCount()}</span>
          <button
            className="button is-primary box"
            onClick={this.handleIncrement}
          >
            {this.state.count === 0 ? "Say Hello" : "Hey Again"}
          </button>
          {hello.map((hello, index) => (
            <h1 key={index}>{hello}</h1>
          ))}

          {this.state.count >= 1 && (
            <div style={{ marginTop: 10 }}>
              <button
                className="button is-primary box"
                onClick={this.handleDelete}
              >
                Bye
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  handleIncrement = () => {
    const count = this.state.count + 1;
    this.setState({ count, bye: false });
  };

  handleDelete = () => {
    const count = 0;
    this.setState({ count, bye: true });
  };

  formatCount() {
    const { count } = this.state;
    if (this.state.bye) {
      return "Goodbye";
    } else {
      return count === 0 ? "Hello!" : count + " hey(s)";
    }
  }

  getClasses() {
    let classes = "";
    classes =
      this.state.count === 0
        ? "{backgroundColor: red}"
        : "{backgroundColor: white}";
    return classes;
  }
}

export default Counter;
