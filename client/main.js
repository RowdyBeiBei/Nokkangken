import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './modules/app/App.jsx';
import Landing from './modules/landing/Landing.jsx';
import Signup from './modules/signup/Signup.jsx';
import Locations from './modules/locations/Locations.jsx';
import Home from './modules/home/Home.jsx';
import SelectedLocation from './modules/selectedLocation/SelectedLocation.jsx';
import ProspectiveMatches from './modules/prospectiveMatches/ProspectiveMatches.jsx';
import AllProspectiveMatches from './modules/allProspectiveMatches/AllProspectiveMatches.jsx';



const store = configureStore();

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
     <Router history={hashHistory}>
       <Route path='/' component={Landing}>
        <Route path='/signup' component={Signup}/>
       </Route>
       <Route path='/home' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/locations' component={Locations}/>
        <Route path='/selectedLocation' component={SelectedLocation}/>
        <Route path='/prospectiveMatches' component={ProspectiveMatches}/>
        <Route path='/allProspectiveMatches' component={AllProspectiveMatches}/>
      </Route>
    </Router>
  </Provider>,
  root
);
