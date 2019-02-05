import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faCloudSun,
  faCloud,
  faBolt,
  faUmbrella,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faCloudSun, faCloud, faBolt, faUmbrella, faSnowflake);

const getDayName = dateStr => {
  const date = new Date(dateStr.slice(0, 10));
  return date.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
};
const getDate = dateStr => {
  const date = new Date(dateStr.slice(0, 10));
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZone: "UTC"
  });
};

const getIcon = num => {
  if (num < 5) {
    return "sun";
  } else if (num >= 5 && num <= 11) {
    return "cloud-sun";
  } else if (num >= 12 && num <= 18) {
    return "umbrella";
  }
};

class Day extends Component {
  render() {
    const { payload, Day } = this.props;

    const iconNumber = Day.Icon;
    return (
      <div className="tile is-parent">
        <article className="tile is-child box" style={{ textAlign: "center" }}>
          <div className="subtitle">{getDayName(payload.Date)}</div>
          <div className="content">{getDate(payload.Date)}</div>

          <FontAwesomeIcon className="fa-3x" icon={getIcon(iconNumber)} />

          <div className="content" style={{ marginTop: 15 }}>
            {payload.Temperature.Minimum.Value}
            {" - "}
            {payload.Temperature.Maximum.Value}
          </div>
        </article>
      </div>
    );
  }
}

export default Day;
