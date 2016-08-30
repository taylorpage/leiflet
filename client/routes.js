import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import Main from './components/main/Main';
import Translator from './components/translator/Translator';

export default(
  <Route path='/' component={ Main }>
    <Route path='translator' component={ Translator }/>
  </Route>
  )