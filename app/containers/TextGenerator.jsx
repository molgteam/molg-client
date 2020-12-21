import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@app/data/rootAction';
import Navigation from '@app/components/Navigation';
import ActiveNavigation from '@app/components/ActiveNavigation';

const TextGenerator = (props) => {
  const { history, navigation } = props;

  return (
    <>
      <ActiveNavigation
        location={history.location}
        setNavigation={props.actions.setGlobalNavigation}
      />
      <Navigation className="sub-navbar" subclassName="sub-navbar-list" activeTab={navigation.global} />
      <div>TextGenerator page</div>
    </>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(TextGenerator);
