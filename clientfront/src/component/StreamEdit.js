import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../action/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams(this.props.match.params.id);
  }

  render() {
    console.log("props in stream/edit", this.props);
    return <div>Edit Stream</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('props in stream/edit', state.streams);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps)(StreamEdit);
