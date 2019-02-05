import React, { Component } from "react";
import Day from "./Day";

class Weather extends Component {
  state = {
    isLoaded: false,
    APIdata: [],
    error: null
  };

  componentDidMount() {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${
        this.props.cityKey
      }?apikey=LsuOctlx0NZKQYh0XelQp37nqbms3lA5&language=en-us&details=false&metric=false`
    )
      .then(res => res.json())
      .then(json => this.setState({ isLoaded: true, APIdata: json }))
      .catch(error => this.setState({ error, isLoaded: false }));
  }

  render() {
    if (this.state.isLoaded === false && this.state.error === null) {
      return <p>Fetching your weather...</p>;
    } else if (this.state.error != null) {
      return (
        <p>
          Something unexpected but expected occurred, please try again tomorrow
          (error when fetching weather data)
        </p>
      );
    }

    return (
      <div className="box" style={{ marginBottom: "20px" }}>
        <div className="column">
          <div className="tile is-ancestor">
            {this.state.APIdata.DailyForecasts.map(day => (
              <Day key={day.Date} payload={day} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
