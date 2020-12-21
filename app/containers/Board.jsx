import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@app/data/rootAction';
import Navigation from '@app/components/Navigation';
import ActiveGlobalNavigation from '@app/components/ActiveGlobalNavigation';

const Board = (props) => {
  const { history, navigation } = props;

  return (
    <>
      <ActiveGlobalNavigation
        location={history.location}
        setGlobalNavigation={props.actions.setGlobalNavigation}
      />
      <Navigation className="sub-navbar" subclassName="sub-navbar-list" activeTab={navigation.global} />
      <div>Board page</div>
    </>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Board);
