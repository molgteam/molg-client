import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '@app/data/rootAction';

const Feed = (props) => {
  const { match, search } = props;
  const { params } = match;
  const { searchingUser } = search;

  useEffect(() => {
    if (!searchingUser.length) {
      props.actions.initFetchUser(params.username);
    }
  }, []);

  return <div>{params.username}</div>;
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Feed);
