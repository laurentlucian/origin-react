import React, { Component } from "react";
import Weather from "./Weather";
import { Search } from "./SearchBar";
import Dropdown from "./WDropdown";

const APIKey =
  "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=LsuOctlx0NZKQYh0XelQp37nqbms3lA5&q=";

const citiesendpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

class WeatherApp extends Component {
  state = {
    cityKey: [],
    cityName: "",
    isLoaded: false,
    error: null,
    errorBox: false,
    text: "",
    suggestions: [],
    newSuggestions: []
  };

  getKey() {
    fetch(APIKey + this.state.cityName)
      .then(res => res.json())
      .then(json =>
        this.setState({
          cityKey: json[0].Key,
          isLoaded: true
        })
      )
      .catch(error => this.setState({ error }));
  }

  onSubmit = e => {
    if (e) {
      e.preventDefault();
    }

    if (this.state.text === "" ) {
      return this.setState({ errorBox: true });
    }

    this.setState(
      {
        cityName: this.state.text,
        isLoaded: false,
        error: null,
        text: "",
        errorBox: false
      },
      this.getKey
    );
  };

  handleClick = city => {
    this.setState({ text: city }, this.onSubmit);
  };

  onChange = e => {
    const text = e.target.value;
    this.setState({ text, errorBox: false }, this.getSuggestion);
  };

  componentDidMount() {
    fetch(citiesendpoint)
      .then(res => res.json())
      .then(json => this.setState({ suggestions: json }));
  }

  getSuggestion = () => {
    const cities = this.state.suggestions;
    const text = this.state.text;
    const newSuggestions = cities.filter(place => {
      const regex = RegExp(text, "gi");
      return place.city.match(regex);
    });
    this.setState({ newSuggestions });
  };

  render() {
    return (
      <div className="container">
        <div
          className="container"
          style={{ margin: "20px auto", width: "700px" }}
        >
          <div className="box" style={{ maxHeight: "85px" }}>
            <Search
              placeholder="City"
              text={this.state.text}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              error={this.state.errorBox}
            />
            {this.state.text !== "" &&
            this.state.newSuggestions.length !== 0 ? (
              <div className="dropdown">
                <Dropdown
                  suggestions={this.state.newSuggestions}
                  handleClick={this.handleClick}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {this.state.error && (
          <p>
            Did you type the name of the city correctly? (error when fetching
            the search results)
          </p>
        )}
        {!this.state.isLoaded &&
          this.state.cityName !== "" &&
          !this.state.error && <p>Fetching City</p>}
        {this.state.isLoaded && <Weather cityKey={this.state.cityKey} />}
      </div>
    );
  }
}

export default WeatherApp;
