import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as action from '@app/data/rootAction';
import history from '@modules/history';
import Home from '@app/containers/Home';
import NotFound from '@app/components/NotFound';

const App = (props) => {
  const { actions } = props;
  useEffect(() => {
    actions.test1();
  }, []);

  return (
    <Router history={history}>
      <div>MOLG 몰쥐입니다몰쥐주쥐</div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <div>hello world!</div>
    </Router>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(action, dispatch),
  }),
)(App);
