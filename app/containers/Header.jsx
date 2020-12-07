import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '@app/data/rootAction';

const Header = (props) => {
  const { search } = props;
  const { searchingUser, result } = search;
  const { isLoading, userList } = result;

  const fetchUser = useCallback(({ pk, username }) => {
    props.actions.fetchUser({ pk, username });
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
              : userList.map(({ username, pk, index }) => (
                <Link to={`/feed/${username}`} key={pk} onClick={() => fetchUser({ pk, username })}>
                  {index}
                  {' '}
                  /
                  {' '}
                  {username}
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
