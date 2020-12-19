import React from 'react';
import SearchList from '@app/components/SearchList';
import { API } from '@app/constants/STATUS';

const SearchWrapper = (props) => {
  const {
    updateUsername, setIsOpen, search, isOpen, fetchUser,
  } = props;

  return (
    <>
      <input
        className="searchBar"
        type="text"
        placeholder="유저명을 입력해주세요..."
        onChange={(e) => updateUsername(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        value={search.searchingUser}
      />
      <SearchList
        {...search.state}
        show={isOpen && search.state.status !== API.INITIAL}
        result={search.result}
        fetchUser={fetchUser}
      />
    </>
  );
};

export default SearchWrapper;
