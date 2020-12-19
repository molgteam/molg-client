import { API } from '@app/constants/STATUS';
import toggle from '@app/hocs/toggle';
import React from 'react';
import SearchItem from './SearchItem';

const EMPTY_USER = '찾는 유저가 없습니다.';

const SearchList = (props) => {
  const { result, status } = props;

  if (status === API.REQUEST) {
    return <div className="loading loading-lg" />;
  }

  if (status === API.FAILURE) {
    return <div className="error">{props.error}</div>;
  }

  if (!result.length) {
    return <div className="empty">{EMPTY_USER}</div>;
  }

  return (
    <div className="search-list">
      <ul>
        {status === API.SUCCESS
          ? result.map((user) => (
            <SearchItem
              key={user.pk}
              user={user}
              fetchUser={props.fetchUser}
            />
          ))
          : null}
      </ul>
    </div>
  );
};

export default toggle(SearchList);
