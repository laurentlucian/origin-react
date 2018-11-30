import React, { Component } from "react";
import randomColor from "randomcolor";

class Counter extends Component {
  state = {
    hello: [],
    bye: false,
    render: false,
    mouseHold: false
  };

  handleIncrement = () => {
    const { hello } = this.state;
    hello.push({ hello: "Hello", color: 0 });
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
    const Hello = this.state.hello;
    if (Hello[i].color < 5) {
      Hello[i].color++;
    } else {
      Hello[i].color = 0;
    }

    this.setState({ hello: Hello });
  };

  holding = null;

  colorHold = index => {
    const hold = this.state.mouseHold;
    if (!hold) {
      this.setState({ mouseHold: true });
      this.holding = setInterval(() => this.boxColor(index), 80);
    }
  };

  helloHold = () => {
    const hold = this.state.mouseHold;
    if (!hold) {
      this.setState({ mouseHold: true });
      this.holding = setInterval(this.handleIncrement, 100);
    }
  };

  unHold = () => {
    if (this.holding) {
      this.setState({ mouseHold: false });
      clearInterval(this.holding);
    }
  };

  componentDidMount() {
    document.addEventListener("mouseup", this.unHold);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.unHold);
    if (this.holding) clearInterval(this.holding);
  }

  render() {
    const hello = [];
    for (let i = 0; i < this.state.count; i++) {
      hello.push("Hey");
    }

    return (
      <div
        className="container box"
        style={{
          width: "auto",
          maxWidth: 600,
          marginTop: 25,
          display: "table"
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
            onMouseDown={this.helloHold}
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
              const color = randomColor();

              return (
                <h1
                  className="box"
                  style={{
                    margin: "5px",
                    backgroundColor: `${hello.color === 0 ? "" : color}`,
                    userSelect: "none"
                  }}
                  key={index}
                  onClick={e => this.boxColor(index)}
                  onMouseDown={e => this.colorHold(index)}
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
