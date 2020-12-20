import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ user, storeUserInfo }) => (
  <li>
    <Link to={`/fe/${user.username}`} className="inner-list" onClick={() => storeUserInfo(user)}>
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
);

export default SearchItem;
