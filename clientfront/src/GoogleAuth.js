import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./action/index";

class GoogleAuth extends Component {
 
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "613593723151-bdbudstf94n6qa0vus4ml2s2rvvthja9.apps.googleusercontent.com",
          scope: "profile email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
      console.log("this.auth", this.auth, this.isSignedIn);
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    //console.log("onAuthChange", this.auth.isSignedIn.get());
  };

  userSignIn = () => {
    this.auth.signIn();
    //console.log("After SignIn Click", this.auth.isSignedIn.get());
  };

  userSignOut = () => {
    this.auth.signOut();
    // console.log("After SignOut Click", this.auth.isSignedIn.get());
  };

  renderAuthText() {
    console.log('props', this.props);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.userSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.userSignIn} className="ui blue google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthText()}</div>;
  }
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
