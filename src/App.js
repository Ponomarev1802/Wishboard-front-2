import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from "./components/header"
import { connect } from "react-redux"


import Auth from "./components/forms/auth"
import Main from "./pages/main"
import { userRequest } from "./actions/userActions"


class App extends Component {

    componentDidMount () {
        const {userRequest} = this.props;
        userRequest();
    }


  render() {
    const { app } = this.props;
    return (
      <div className="App">
          <PrimarySearchAppBar></PrimarySearchAppBar>
          {app.auth?<Main/>:<Auth/>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    userRequest: data => dispatch(userRequest(data))
});

const mapStateToProps = store => ({
    app: store.app
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
