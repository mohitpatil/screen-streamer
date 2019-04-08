import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import StreamCreate from "./component/StreamCreate";
import StreamDelete from "./component/StreamDelete";
import StreamEdit from "./component/StreamEdit";
import StreamList from "./component/StreamList";
import StreamShow from "./component/StreamShow";
import history from "../src/history";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <NavBar />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
