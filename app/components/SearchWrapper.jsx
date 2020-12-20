import React from 'react';
import SearchList from '@app/components/SearchList';
import { API } from '@app/constants/STATUS';
import useTargetEvent from '@app/hooks/useTargetEvent';

const SearchWrapper = (props) => {
  const {
    updateUsername, updateIsOpen, search, isOpen, storeUserInfo,
  } = props;

  useTargetEvent({
    inner: () => updateIsOpen(true),
    outer: () => updateIsOpen(false),
  }, 'searchBar');

  return (
    <>
      <input
        className="searchBar"
        type="text"
        placeholder="유저명을 입력해주세요..."
        onChange={(e) => updateUsername(e.target.value)}
        value={search.searchingUser}
      />
      <SearchList
        {...search.state}
        show={isOpen && search.state.status !== API.INITIAL}
        result={search.result}
        storeUserInfo={storeUserInfo}
      />
    </>
  );
};

export default SearchWrapper;
