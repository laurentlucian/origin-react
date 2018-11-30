import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.css";

class Navbar extends Component {
  state = {
    burger: false
  };

  handleMenu = () => {
    const burger = this.state.burger;
    this.setState({ burger: !burger });
  };

  render() {
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleMenu}
            style={{
              border: "none",
              backgroundColor: "black",
              outline: "none"
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className={`navbar-menu ${this.state.burger ? "is-active" : ""}`}>
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item" onClick={this.handleMenu}>
              Home
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-item navbar-link">Projects</div>
              <div className="navbar-dropdown">
                <NavLink
                  to="/todo"
                  className="navbar-item"
                  onClick={this.handleMenu}
                >
                  To Do
                </NavLink>
                <NavLink
                  to="/counter"
                  className="navbar-item"
                  onClick={this.handleMenu}
                >
                  Hello
                </NavLink>
                <NavLink
                  to="/weather"
                  className="navbar-item"
                  onClick={this.handleMenu}
                >
                  Weather
                </NavLink>
                <NavLink
                  to="/photos"
                  className="navbar-item"
                  onClick={this.handleMenu}
                >
                  Photos
                </NavLink>
                <NavLink
                  to="/simon"
                  className="navbar-item"
                  onClick={this.handleMenu}
                >
                  Simon
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
