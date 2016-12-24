import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';
import Landing from '../landing/Landing.jsx';


class App extends React.Component {

  onInputChange(term) {
    console.log(this.props);
  }

  componentWillMount() {
    // console.log(this.props.stocks.data[0]);
    this.props.actions.requestNumbers();
  }
  render() {
    return (
       <Landing />
    )
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
