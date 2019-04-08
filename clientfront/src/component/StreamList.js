import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../action/index";
import { Link } from "react-router-dom";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderUserAccess(stream) {
    if (stream.userId === this.props.currentUser) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          {/* <Link to={`streams/delete/${stream.id}`} className="ui button negative">Delete</Link> */}
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderUserAccess(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`streams/show/${stream.id}`}>{stream.title}</Link>
          </div>
          <div className="description">{stream.description}</div>
        </div>
      );
    });
  }

  renderToStreamCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="right floated">
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    //console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderToStreamCreate()}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStatetoProps,
  { fetchAllStreams }
)(StreamList);
