import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ user, fetchUser }) => (
  <li>
    <Link to={`/feed/${user.username}`} className="inner-list" onClick={() => fetchUser(user)}>
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
