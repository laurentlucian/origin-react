import React, { Component } from "react";
import Search from "./SearchBar";
import PhotoItem from "./PhotoItem";

const API =
  "https://api.unsplash.com/search/photos?client_id=80686907d57006afe0be942506b8812817d84389a7ca9089734480eec48ab764&query=";

class Photos extends Component {
  state = {
    json: [],
    loading: false,
    isLoaded: false,
    error: null
  };

  onSubmit = final => {
    this.setState({ loading: true });
    fetch(API + final)
      .then(res => res.json())
      .then(json => this.setState({ json, isLoaded: true, loading: false }))
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 20, width: 500 }}>
          <div className="box">
            <Search placeholder="Photo" onSubmit={this.onSubmit} />
          </div>
        </div>
        <div>
          <div>
            <div className="photo-grid">
              {this.state.loading && "Loading..."}
              {this.state.error && !this.state.loading && "Error, try again!"}
              {this.state.isLoaded &&
                !this.state.loading && (
                  <PhotoItem item={this.state.json.results} />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
