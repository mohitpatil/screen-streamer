import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../action/index";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
      this.buildPlayer();
  }

  componentWillUnmount() {
      //console.log('unmount called');
      this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `https://youtu.be/unJzy1XwQ2k.flv`
    });
    this.player.attachMediaElement(this.video.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.video} style={{ width: "100%" }} controls />
        <h1>Name of Stream: {title}</h1>
        <h5>Description: {description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
