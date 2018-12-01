import React, { Component } from "react";
import "../css/simon.css";

const soundUrl = "https://s3.amazonaws.com/freecodecamp/simonSound";
const sound = [
  new Audio(`${soundUrl}1.mp3`),
  new Audio(`${soundUrl}2.mp3`),
  new Audio(`${soundUrl}3.mp3`),
  new Audio(`${soundUrl}4.mp3`)
];

const color = ["blue", "red", "dark", "green"];

class Simon extends Component {
  state = {
    currentLevel: [],
    player: [],
    playing: true
  };

  play = i => {
    const currentColor = color[i];
    const button = document.querySelector(`#${currentColor}`);
    sound[i].play();
    button.classList.toggle("play");
    setTimeout(() => {
      button.classList.toggle("play");
    }, 200);
  };

  stack = "";

  showGame = () => {
    let num = 0;
    if (this.state.currentLevel.length !== 0) {
      this.stack = setInterval(() => {
        let curLevel = this.state.currentLevel[num];
        // console.log("current value", curLevel);
        this.play(curLevel);
        num++;
        if (num >= this.state.currentLevel.length) {
          clearInterval(this.stack);
          num = 0;
          // console.log("after interval");
          this.setState({ player: [], playing: false });
        }
      }, 750);
    }
  };

  addLevel() {
    let level = [...this.state.currentLevel];
    const newNumber = Math.random() * 3;
    level.push(Math.round(newNumber * 1));
    // console.log("addLevel", level);

    this.setState({ currentLevel: level, playing: true }, () =>
      this.showGame()
    );
  }

  handleClick = index => {
    clearInterval(this.stack);
    const playerMove = this.state.player;
    playerMove.push(index);
    sound[index].play();
    this.setState({ player: playerMove }, () => this.checkMove());
  };

  checkMove = () => {
    for (let i = 0; i < this.state.player.length; i++) {
      // console.log("currentLevel", this.state.currentLevel);
      console.log("playerMove", this.state.player);
      // console.log("currentLevel[i]", this.state.currentLevel[i]);
      // console.log("playerMove[i]", this.state.player[i]);
      if (this.state.player[i] === this.state.currentLevel[i]) {
        this.setState({ player: this.state.player });
        if (this.state.player.length === this.state.currentLevel.length) {
          this.setState({ player: [] }, () => this.addLevel());
          console.log("goodjob");
        }
      } else {
        console.log("badjob");
        this.setState({ currentLevel: [], playing: true }, () =>
          clearInterval(this.stack)
        );
        this.toggleAll();
      }
    }
  };

  newGame = () => {
    // const buttons = document.getElementsByClassName("buttons");
    // for (let i = 0; i < buttons.length; i++) {
    //   buttons[i].classList.remove("play");
    // }
    this.toggleAll();

    clearInterval(this.stack);
    this.setState({ currentLevel: [], player: [], zero: false }, () =>
      this.addLevel()
    );
  };

  toggleAll = () => {
    const buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("play");
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", e => this.handleKey(e));
    this.toggleAll();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  handleKey = e => {
    if (!this.state.playing) {
      if (e.key === "ArrowLeft") {
        this.handleClick(0);
      } else if (e.key === "ArrowUp") {
        this.handleClick(1);
      } else if (e.key === "ArrowRight") {
        this.handleClick(2);
      } else if (e.key === "ArrowDown") {
        this.handleClick(3);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.newGame}>
          {this.state.currentLevel.length ? "New Game" : "Start"}
        </button>
        <div>{this.state.currentLevel.length}</div>
        <div
          className="buttons"
          id="blue"
          onClick={() => this.handleClick(0)}
          style={this.state.playing ? { pointerEvents: "none" } : {}}
        />
        <div className="middle">
          <div
            className="buttons"
            id="red"
            onClick={() => this.handleClick(1)}
            style={this.state.playing ? { pointerEvents: "none" } : {}}
          />
          <div
            className="buttons"
            id="dark"
            onClick={() => this.handleClick(2)}
            style={this.state.playing ? { pointerEvents: "none" } : {}}
          />
        </div>
        <div
          className="buttons"
          id="green"
          onClick={() => this.handleClick(3)}
          style={this.state.playing ? { pointerEvents: "none" } : {}}
        />
      </div>
    );
  }
}

export default Simon;
