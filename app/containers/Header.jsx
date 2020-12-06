import React from 'react';
import { connect } from 'react-redux';
import * as actions from '@app/data/rootAction';
import { bindActionCreators } from 'redux';

const Header = (props) => {
  const { search } = props;
  const { searchingUser, userInfo } = search;
  const { isLoading, userList } = userInfo;

  return (
    <header>
      <div className="header">
        <div>햄버거</div>
        <div className="inner-seach">
          <div className="search-content">
            <input type="text" onChange={(e) => props.actions.updateUser(e.target.value)} value={searchingUser} />
            <button type="button">찾기</button>
          </div>
          <div
            className="inner-search-result"
            style={{
              position: 'fixed',
              height: '300px',
              overflow: 'scroll',
              background: 'beige',
            }}
          >
            {isLoading
              ? <div>loading...</div>
              : userList.map(({ username, pk, index }) => (
                <p key={pk}>
                  {index}
                  {' '}
                  /
                  {' '}
                  {username}
                </p>
              ))}
          </div>
        </div>

        <div>profile</div>
      </div>
    </header>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Header);
