import React, { Component } from 'react';
import '../css/simon.css';

const soundUrl = 'https://s3.amazonaws.com/freecodecamp/simonSound';
const sound = [
  new Audio(`${soundUrl}1.mp3`),
  new Audio(`${soundUrl}2.mp3`),
  new Audio(`${soundUrl}3.mp3`),
  new Audio(`${soundUrl}4.mp3`)
];

class Simon extends Component {
  state = {
    memory: [],
    current: [],
    color: null,
    playing: true,
    lost: false
  };

  play = (i, t) => {
    this.setState({ color: i }, () => sound[i].play());
    setTimeout(() => {
      this.setState({ color: null });
    }, t);
  };

  initComputer = () => {
    this.setState(state => {
      const memory = [...state.memory];
      memory.push(Math.floor(Math.random() * 3));
      return { memory: memory, playing: true };
    }, this.computerTurn);
  };

  computerTurn = () => {
    clearTimeout(this.computerTimeout);

    const current = [...this.state.current]; // gets current every recursive
    const memory = [...this.state.memory]; // stays the same within the turn
    const now = memory[current.length]; // current turn (length is 1 more than index so next turn)

    if (typeof now === 'undefined') {
      this.initPlayer();
      return;
    }
    current.push(now); // add the current turn
    this.play(now, 850);
    this.setState({
      current
    });

    // recursive
    this.computerTimeout = setTimeout(
      () => this.computerTurn(),
      current.length === memory.length ? 100 : 1100
    );
  };

  initPlayer = () => {
    this.setState({ playing: false });
  };

  playerTurn = (i, e) => {
    // console.log('apertei', i, 'tinha que apertar=', this.state.current[0]);
    this.setState(
      state => {
        const [now, ...newCurrent] = state.current;
        if (now !== i) {
          // game over
          return {
            memory: [],
            current: [],
            playing: true,
            lost: true,
            color: i
          };
        }

        if (newCurrent.length === 0) {
          this.end = setTimeout(() => this.initComputer(), 1000);
        }

        return {
          current: newCurrent
        };
      },
      () => {
        sound[i].pause();
        this.play(i, 200);
      }
    );
  };

  start = () => {
    this.setState({ playing: true, lost: false });
    this.initComputer();
  };

  gameOver = l => {
    this.setState({ memory: [], current: [], playing: true });
    l === 'l' && this.setState({ lost: true });
  };

  fnKey;
  keyDown;

  componentDidMount() {
    // document.addEventListener(
    //   'mousedown',
    //   (this.fnKey = e => {
    //     e.preventDefault();
    //   }),
    //   false
    // );
    document.addEventListener(
      'keydown',
      (this.keyDown = e => {
        e.preventDefault();
        this.handleKey(e);
      })
    );
  }
  //remove eventlistener of mouse down correctly
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
    document.removeEventListener('mousedown', this.fnKey, false);
  }

  handleKey = e => {
    if (!this.state.playing) {
      if (e.key === 'ArrowUp') {
        this.playerTurn(0);
      } else if (e.key === 'ArrowLeft') {
        this.playerTurn(1);
      } else if (e.key === 'ArrowRight') {
        this.playerTurn(2);
      } else if (e.key === 'ArrowDown') {
        this.playerTurn(3);
      }
    }
  };

  render() {
    let button;
    if (!this.state.memory.length && !this.state.lost) {
      button = (
        <button className='button' onClick={this.start}>
          Start
        </button>
      );
    } else if (this.state.lost) {
      button = (
        <button className='button' onClick={this.start} style={{ fontWeight: 'bold' }}>
          Lost! Again?
        </button>
      );
    } else {
      button = (
        <button className='button' onClick={this.gameOver}>
          New Game
        </button>
      );
    }

    return (
      <div className='containerSimon'>
        {button}
        <div>{this.state.memory.length}</div>
        {/* <div>{JSON.stringify(this.state, null, 2)}</div> */}
        <button
          className='buttons'
          id='blue'
          onClick={e => this.playerTurn(0, e)}
          style={{
            pointerEvents: this.state.playing && 'none',
            backgroundColor:
              this.state.color === 0 || !this.state.memory.length ? 'currentColor' : ''
          }}
        />
        <div className='middle'>
          <button
            className='buttons'
            id='red'
            onClick={e => this.playerTurn(1, e)}
            style={{
              pointerEvents: this.state.playing && 'none',
              backgroundColor:
                this.state.color === 1 || !this.state.memory.length ? 'currentColor' : ''
            }}
          />
          <button
            className='buttons'
            id='dark'
            onClick={e => this.playerTurn(2, e)}
            style={{
              pointerEvents: this.state.playing && 'none',
              backgroundColor:
                this.state.color === 2 || !this.state.memory.length ? 'currentColor' : ''
            }}
          />
        </div>
        <button
          className='buttons'
          id='green'
          onClick={e => this.playerTurn(3, e)}
          style={{
            pointerEvents: this.state.playing && 'none',
            backgroundColor:
              this.state.color === 3 || !this.state.memory.length ? 'currentColor' : ''
          }}
        />
      </div>
    );
  }
}

export default Simon;
