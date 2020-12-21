import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@app/data/rootAction';
import ActiveNavigation from '@app/components/ActiveNavigation';
import UserNavigation from '@app/components/UserNavigation';

const Story = (props) => {
  const {
    history, user, navigation, match,
  } = props;
  const { params } = match;
  const { info } = user;

  useEffect(() => {
    props.actions.setUsername(params.username);
  }, []);

  return (
    <>
      <ActiveNavigation
        location={history.location}
        setNavigation={props.actions.setUserNavigation}
      />
      <div className="sub-navbar">
        <div className="sub-navbar-list">
          <div className="search-navbar">
            <input type="text" className="searchBar" placeholder="유저명을 입력해주세요..." value={info.username} />
          </div>
        </div>
      </div>
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
                <div className="docs-demo columns" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Story);
