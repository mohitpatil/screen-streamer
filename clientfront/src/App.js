import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./component/NavBar";

const pageOne = () => {
  return (
    <div>
      Page one
      <Link to="/pageTwo">Navigate to page 2</Link>
    </div>
  );
};

const pageTwo = () => {
  return <div>Page Two</div>;
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={pageOne} />
            <Route path="/pageTwo" component={pageTwo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
