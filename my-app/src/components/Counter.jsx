import React, { Component } from "react";

class Counter extends Component {
  state = {
    hello: [],
    bye: false,
    render: false
  };

  handleIncrement = () => {
    const { hello } = this.state;
    hello.push({ hello: "Hello", color: false });
    this.setState({ hello, bye: false });
  };

  handleDelete = () => {
    const hello = [];
    this.setState({ hello, bye: true });
  };

  formatCount() {
    const { hello } = this.state;
    if (this.state.bye) {
      return "Goodbye";
    } else {
      return hello.length === 0 ? "Hello!" : hello.length + " hey(s)";
    }
  }

  boxColor = i => {
    //fix this so it switches color between true or false
    //replace only color and pushes in new array
    const Hello = this.state.hello;
    console.log(Hello[i]);
    Hello[i].color = !Hello[i].color;
    this.setState({ hello: Hello });
  };

  render() {
    const hello = [];
    for (let i = 0; i < this.state.count; i++) {
      hello.push("Hey");
    }

    return (
      <div
        className="container box"
        style={{
          maxWidth: 600,
          marginTop: 25
        }}
      >
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
            onKeyDown={this.handleIncrement}
          >
            {this.state.hello.length === 0 ? "Say Hello" : "Again?"}
          </button>
          <div
            style={{
              display: "flex",
              maxWidth: 550,
              flexWrap: "wrap",
              justifyContent: "center",
              maxHeight: 450,
              overflow: "scroll"
            }}
          >
            {this.state.hello.map((hello, index) => {
              return (
                <h1
                  className={`box`} //changes class depending if variable is true or false
                  style={{
                    margin: "5px",
                    backgroundColor: `${
                      this.state.hello[index].color === true ? "red" : ""
                    }`
                  }}
                  key={index}
                  onClick={i => this.boxColor(index)}
                >
                  {hello.hello}
                </h1>
              );
            })}
          </div>
          {this.state.hello.length !== 0 && (
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
}

export default Counter;
