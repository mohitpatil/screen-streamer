import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../action/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.desciption}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    return (
    <div>
        <h2>Streams
        </h2>
        <div className="ui celled list">{this.renderList()}</div>
    </div>,
    <div>StreamList</div>);
  }
}

const mapStatetoProps = state => {
  return {
    streams: Object.values(state.streams)
  };
};

export default connect(
  mapStatetoProps,
  { fetchAllStreams }
)(StreamList);
