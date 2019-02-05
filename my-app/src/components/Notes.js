import React, { Component } from 'react';
import '../css/notes.css';
import ContentEditable from 'react-contenteditable';

class Notes extends Component {
  state = {
    notes: null,
    current: null,
    disabled: true
  };

  onChange = e => {
    const notes = this.state.notes;
    const note = e.target.value;
    notes.history[this.state.current].html = note;
    this.setState({ notes: notes });
  };

  componentDidMount() {
    fetch('/notes')
      .then(res => res.json())
      .then(json => this.setState({ notes: json.notes }))
      .catch(err => console.log(err));
  }

  onBlur = () => {
    fetch('/notes/save', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  };

  handleNew = () => {
    const notes = this.state.notes;
    notes.history.push({
      id: new Date().getTime(),
      html: `New Note ${notes.history.length + 1}`
    });
    console.log('new notes', notes);

    const current = notes.history.length - 1;

    this.setState({ notes, current, disabled: false });

    fetch('/notes/save', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  };

  handleDelete = () => {
    let current = this.state.current;
    if (current === null) {
      return;
    }
    current === 0 ? (current = null) : (current = current - 1);
    console.log(current);

    const notes = this.state.notes;
    notes.history.splice(this.state.current, 1);
    this.setState({ notes, current: current, disabled: false });

    fetch('/notes/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  };

  render() {
    if (!this.state.notes) return <div>Loading</div>;
    return (
      <div className='containerN'>
        <div className='btns'>
          <button className='button' id='note-btns' onClick={this.handleNew}>
            New
          </button>
          <button className='button' id='note-btns' onClick={this.handleDelete}>
            Delete
          </button>
        </div>
        <div className='note'>
          <div className='control'>
            {this.state.notes.history.map((v, i) => {
              return (
                <div
                  className='menu'
                  key={v.id}
                  onClick={() => this.setState({ current: i, disabled: false })}
                >
                  {v.html.substring(0, 20)}
                </div>
              );
            })}
          </div>

          <div className='post'>
            <ContentEditable
              html={
                this.state.current === null
                  ? this.state.notes.initial
                  : this.state.notes.history[this.state.current].html
              }
              style={{ outline: 'none', height: '100%', width: '100%' }}
              onChange={this.onChange}
              onBlur={this.onBlur}
              disabled={this.state.disabled}
              spellCheck='false'
              tagName='p'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
