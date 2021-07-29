// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="page-header">Quesadilla Bravas</h1>
      <div id="homepage-image">
        <div className="homepage-image-text">
          <p className={"italics"}>
            The health and safety of our staff and community is our number one
            priority. Our restaurant is committed to practicing the strictest
            Covid-19 protocols set by health and government officials.
          </p>
          <p>
            As a leader in the Mexican food industry, Quesadilla Bravas is proud
            of its reputation for excellent food. Each dish is jam-packed with
            cheese and no tortilla is ever left too long on the stove.
          </p>
          <p>
            <a href="https://github.com/jql6/shopping-cart">
              Link to the repository
            </a>{" "}
            | <a href="https://jql6.github.io/">Return to homepage</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
