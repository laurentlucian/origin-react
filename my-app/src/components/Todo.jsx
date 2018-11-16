import React, { Component } from "react";

class Todo extends Component {
  state = {
    text: "",
    list: [],
    error: false
  };

  componentDidMount() {
    this.setState({ list: JSON.parse(localStorage.getItem("list")) });
  }

  onChange = e => {
    const newText = e.target.value;
    this.setState({ text: newText, error: false });
  };

  onAdd = () => {
    if (this.state.text === "") {
      this.setState({ error: true });
      return;
    }
    const text = this.state.text;
    const list = [...this.state.list];
    list.push(text);
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({ list, text: "" });
  };

  onDelete = index => {
    const handleDelete = () => {
      const { list } = this.state;
      list.splice(index, 1);
      localStorage.removeItem("list");
      localStorage.setItem("list", JSON.stringify(list));
      this.setState(list);
    };
    return handleDelete;
  };

  onClear = () => {
    const list = [];
    this.setState({ list });
    localStorage.clear();
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      return this.onAdd();
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <div
            className="column is-half"
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <div className="box field is-grouped" style={{ margin: "0 auto" }}>
              <div className="control ">
                <input
                  className={`input ${this.state.error ? "is-danger" : ""}`}
                  type="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  placeholder="ToDo"
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="control">
                <button
                  onClick={this.onAdd}
                  className={`button is-${
                    this.state.error ? "danger" : "primary"
                  }`}
                >
                  Submit
                </button>
              </div>
              <button className="button is-warning" onClick={this.onClear}>
                Clear
              </button>
            </div>
          </div>
          {this.state.list.map((value, index) => (
            <div
              key={index}
              className="tags has-addons"
              style={{
                margin: "0 auto",
                minWidth: "50%",
                justifyContent: "center"
              }}
            >
              <span className="tag is-medium" style={{ minWidth: "200px" }}>
                <ul>{value}</ul>
              </span>
              <button
                className="tag is-delete is-medium"
                onClick={this.onDelete(index)}
                style={{ border: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Todo;
