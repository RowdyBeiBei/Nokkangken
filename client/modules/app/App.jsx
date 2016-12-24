import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';

class App extends React.Component {

  onInputChange(term) {
    console.log(this.props);
  }

  componentWillMount() {
    // console.log(this.props.stocks.data[0]);
    this.props.actions.requestNumbers();
  }

  render () {
    return (
    <div>
      <h1>this is the super awesome amazing <strong>Nokkangken</strong> App</h1>
      <input type='text' onChange={event => this.onInputChange(event.target.value)}></input>
      <h2>{this.props.stocks.data[0] ? this.props.stocks.data[0].symbol : null}</h2>
    </div>
    );
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
