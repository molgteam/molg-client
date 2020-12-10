import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '@app/data/rootAction';

const Header = (props) => {
  const { search } = props;
  const { searchingUser, result } = search;
  const { isLoading, userList } = result;

  const fetchUser = useCallback((user) => {
    console.log(user);
    props.actions.fetchUser(user);
  }, []);

  return (
    <header>
      <div className="header">
        <div>햄버거</div>
        <div className="inner-seach">
          <div className="search-content">
            <input type="text" onChange={(e) => props.actions.updateUsername(e.target.value)} value={searchingUser} />
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
              : userList.map((user) => (
                <Link to={`/feed/${user.username}`} key={user.pk} onClick={() => fetchUser(user)}>
                  {user.index}
                  {' '}
                  /
                  {' '}
                  {user.username}
                </Link>
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
