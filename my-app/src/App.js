import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import WeatherApp from "./components/WeatherApp";
import Photos from "./components/Photos";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          minHeight: "100vh",
          width: "100vw"
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Router>
            <div>
              <Navbar />
              <Route path="/" component={Home} exact />
              <Route path="/todo" component={Todo} />
              <Route path="/counter" component={Counter} />
              <Route path="/weather" component={WeatherApp} />
              <Route path="/photos" component={Photos} />
            </div>
          </Router>
        </div>
        <footer className="footer" style={{ height: "100px" }}>
          <div className="content has-text-centered">
            <p>
              <strong>Taught</strong> by{" "}
              <a href="http://pierreandreis.com/#!/about">Pierre Andreis</a>
            </p>
            <p>
              <strong>Made</strong> by
              {" Laurent Lucian"}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
