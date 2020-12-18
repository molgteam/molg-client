import { API } from '@app/constants/STATUS';
import toggle from '@app/hocs/toggle';
import React from 'react';
import { Link } from 'react-router-dom';

const EMPTY_USER = '찾는 유저가 없습니다.';

const SearchList = (props) => {
  const { result, status } = props;

  return (
    <div className="search-list">
      <ul>
        {
          status === API.REQUEST
            ? <li className="inner-list loading loading-lg" />
            : (status === API.SUCCESS && result.length
              ? result.map((user) => (
                <li key={user.pk}>
                  <Link to={`/feed/${user.username}`} className="inner-list" onClick={() => props.fetchUser(user)}>
                    <div className="img-wrapper">
                      <img
                        src={user.profilePicUrl}
                        alt={user.username}
                      />
                    </div>
                    <div className="user-wrapper">
                      <strong>{user.username}</strong>
                      <span>{user.fullName || ''}</span>
                    </div>
                  </Link>
                </li>
              ))
              : <div>{EMPTY_USER}</div>
            )
        }
      </ul>
    </div>
  );
};

export default toggle(SearchList);
