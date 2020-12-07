import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as action from '@app/data/rootAction';
import history from '@modules/history';
import Home from '@app/containers/Home';
import NotFound from '@app/components/NotFound';
import Header from './Header';
import Feed from './Feed';
import RecommendFeed from './RecommendFeed';

const App = (props) => {
  useEffect(() => {
    console.log('로그인 인증할 때 사용할 예정', props);
  }, []);
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feed" component={RecommendFeed} />
        <Route path="/feed/:username" component={Feed} />
        <Route component={NotFound} />
      </Switch>
      <footer>footer</footer>
    </Router>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(action, dispatch),
  }),
)(App);
