import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams, editStream } from "../action/index";
import EntryForm from './EntryForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams(this.props.match.params.id);
  }

  onSubmit = formvalue => {
    console.log(formvalue);
    this.props.editStream(this.props.match.params.id, formvalue);
  }

  render() {
    //console.log("props in stream/edit", this.props);
    if (!this.props.stream) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <h3>Edit your Stream</h3>
          <EntryForm initialValues={{ 'title':this.props.stream.title, 'description': this.props.stream.description }} onSubmit={this.onSubmit} />
        </div>
      ) 
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('props in stream/edit', state.streams);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchAllStreams, editStream }
)(StreamEdit);
