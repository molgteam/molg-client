import React, { useCallback, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '@app/data/rootAction';
import { API } from '@app/constants/STATUS';

const Feed = (props) => {
  const {
    match, search, user, feed,
  } = props;
  const { params } = match;
  const { searchingUser } = search;
  const { state, nodes, pageInfo } = feed;
  const { info } = user;

  useEffect(() => {
    if (!searchingUser.length) {
      props.actions.initFetchUser(params.username);
    }
  }, []);

  const fetchMoreFeed = useCallback(() => {
    props.actions.fetchMoreFeeds({ pk: info.pk, endCursor: pageInfo.endCursor });
  });

  if (state.status === API.REQUEST) {
    return <div>loading...</div>;
  }

  return state.status === API.SUCCESS
    ? (
      <div>
        <p>{info.username}</p>
        <div>
          {nodes.map((f, i) => (
            <div key={i}>
              <span>
                {i}
                :
                {' '}
              </span>
              <span>{f.id}</span>
            </div>
          ))}
        </div>
        <div>
          {pageInfo.hasNextPage
            ? <button type="button" onClick={fetchMoreFeed}>더보기</button> : null}

        </div>
      </div>
    )
    : <div>유저 정보를 불러오는데 실패하였습니다.</div>;
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Feed);