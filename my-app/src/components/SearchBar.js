import React from "react";

export const Search = props => {
  return (
    <form className="field is-grouped" onSubmit={props.onSubmit}>
      <input
        className={`input is-medium ${props.error ? "is-danger" : ""}`}
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.onChange}
      />
      <button
        className={`button is-medium ${props.error ? "is-danger" : ""}`}
        onClick={props.onSubmit}
        type="submit"
        style={{ marginLeft: 15 }}
      >
        Search
      </button>
    </form>
  );
};

class SearchWrapper extends React.Component {
  state = {
    text: "",
    error: false
  };

  onChange = e => {
    const text = e.target.value;
    this.setState({ text, error: false });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      const final = this.state.text;
      this.props.onSubmit(final);
      this.setState({ text: "" });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Search
        placeholder={this.props.placeholder}
        text={this.state.text}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        error={this.state.error}
      />
    );
  }
}

export default SearchWrapper;
