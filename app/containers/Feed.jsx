import React, { useCallback, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '@app/data/rootAction';
import { API } from '@app/constants/STATUS';
import ActiveNavigation from '@app/components/ActiveNavigation';
import UserNavigation from '@app/components/UserNavigation';

const Feed = (props) => {
  const {
    match, user, feed, history, navigation,
  } = props;
  const { params } = match;
  const { state, nodes, pageInfo } = feed;
  const { info } = user;

  useEffect(() => {
    if (!info.pk) {
      props.actions.fetchUserPk(params.username);
    } else {
      props.actions.fetchUser(info);
    }
  }, []);

  const fetchMoreFeed = useCallback(() => {
    props.actions.fetchMoreFeeds({ pk: info.pk, endCursor: pageInfo.endCursor });
  });

  if (state.status === API.REQUEST) {
    return <div className="loading loading-lg" />;
  }

  if (state.status === API.SUCCESS) {
    return (
      <>
        <ActiveNavigation
          location={history.location}
          setNavigation={props.actions.setUserNavigation}
        />
        <div className="container">
          <div className="docs-demo columns">
            <div className="column col-12 col-xs-12">
              <div className="panel">
                <div className="panel-header text-center">
                  <figure className="avatar avatar-lg">
                    <img src={info.profilePicUrl} alt={info.profilePicId} />
                  </figure>
                  <div className="panel-title h5 mt-10">{info.username}</div>
                  <div className="panel-subtitle">{info.fullName}</div>
                  <div className="panel-subtitle">게시물 120 / 팔로워 240 / 팔로잉 300 정보 없음</div>
                </div>
                <UserNavigation activeTab={navigation.user} username={info.username} />
                <div className="panel-body">
                  <div className="docs-demo columns">
                    {
                    nodes.map((node, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className="column col-4 col-xs-12" key={index}>
                        <div className="card">
                          <div className="card-image">
                            <img
                              className="img-responsive"
                              src={node.thumbnailSrc}
                              alt={node.thumbnailSrc}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://i.pinimg.com/originals/3c/40/44/3c404407879dfad72f02fd5a6b147e56.jpg';
                                e.target.alt = 'error image';
                              }}
                            />
                          </div>
                          <div className="card-header">
                            <div className="card-title h5">
                              <span>
                                like:
                                {' '}
                                {node.likeCount}
                              </span>
                              {' '}
                              <span>
                                comment:
                                {' '}
                                {node.commentCount}
                              </span>
                            </div>
                            <div className="card-subtitle text-gray">
                              {node.captions.join('\n')}
                            </div>
                          </div>
                          <div className="card-footer">
                            <a className="btn btn-primary" href="#cards">저장하기</a>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  </div>
                </div>
                <div className="panel-footer">
                  {pageInfo.hasNextPage
                    ? <button type="button" className="btn btn-primary btn-block" onClick={fetchMoreFeed}>더보기</button>
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div>유저 정보를 불러오는데 실패하였습니다.</div>;
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Feed);
