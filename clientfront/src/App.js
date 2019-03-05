import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import StreamCreate from "./component/StreamCreate";
import StreamDelete from "./component/StreamDelete";
import StreamEdit from "./component/StreamEdit";
import StreamList from "./component/StreamList";
import StreamShow from "./component/StreamShow";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
          <NavBar/>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/show" component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
