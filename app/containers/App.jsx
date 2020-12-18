import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as action from '@app/data/rootAction';
import ErrorBoundary from '@app/components/ErrorBoundary';
import Home from '@app/containers/Home';
import Header from '@app/containers/Header';
import Feed from '@app/containers/Feed';
import RecommendFeed from '@app/containers/RecommendFeed';
import Story from '@app/containers/Story';
import NotFound from '@app/components/NotFound';
import FamousHashtags from '@app/components/FamousHashtags';
import Footer from '@app/components/Footer';

const App = (props) => {
  useEffect(() => {
    console.log('로그인 인증할 때 사용할 예정', props);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={RecommendFeed} />
          <Route path="/feed/:username" component={Feed} />
          <Route path="/story/:username" component={Story} />
          <Route component={NotFound} />
        </Switch>
        <FamousHashtags />
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(action, dispatch),
  }),
)(App);
