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
import Sidebar from '@app/components/Sidebar';
import FamousUsers from '@app/components/FamousUsers';
import TextGenerator from '@app/components/TextGenerator';
import Board from '@app/components/Board';

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
          <Route exact path="/fe" component={RecommendFeed} />
          <Route path="/fe/:username" component={Feed} />
          <Route path="/st/:username" component={Story} />
          <Route path="/fu" component={() => <FamousUsers isNav />} />
          <Route path="/tg" component={TextGenerator} />
          <Route path="/bo" component={Board} />
          <Route component={NotFound} />
        </Switch>
        <FamousHashtags />
        <Footer />
        <Sidebar show={props.sidebar.show} />
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
