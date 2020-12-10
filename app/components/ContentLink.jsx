import React from 'react';
import { Link } from 'react-router-dom';

const ContentLink = (props) => {
  const { user } = props;
  const { info } = user;
  return (
    <div>
      <div>
        <Link to={`/feed/${info.username}`}>feed</Link>
        {' '}
        <Link to={`/story/${info.username}`}>story</Link>
      </div>
    </div>
  );
};

export default ContentLink;
