import React from "react";

const Dropdown = props => {
  return props.suggestions.slice(0, 5).map(place => {
    const cityName = place.city;
    const stateName = place.state
    const key = place.rank;
    return (
        <li className="dropdownitem" onClick={() => props.handleClick(cityName)} key={key}>
          {cityName}, {stateName}
        </li>
    );
  });
};

export default Dropdown;
