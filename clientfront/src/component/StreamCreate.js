import React from "react";
import { connect } from "react-redux";
import { createStream } from "../action/index";
import EntryForm from "./EntryForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add new Stream</h3>
        <EntryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream })(StreamCreate);
