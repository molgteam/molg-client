import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '@app/data/rootAction';
import SearchList from '@app/components/SearchList';
import Notice from '@app/components/Notice';
import FamousUsers from '@app/components/FamousUsers';
import {
  HOME, FAMOUS_USER, TEXT_GENERATOR, BOARD,
} from '@app/constants/NAVIGATION';
import { API } from '@app/constants/STATUS';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { search } = props;
  const { searchingUser, result, state } = search;

  const fetchUser = useCallback((user) => {
    props.actions.fetchUser(user);
  }, []);

  return (
    <>
      <div className="sub-navbar">
        <ul className="sub-navbar-list">
          <li className="active">
            <Link to="/" className="link-group">{HOME}</Link>
          </li>
          <li className="">
            <Link to="/" className="link-group">{FAMOUS_USER}</Link>
          </li>
          <li className="">
            <Link to="/" className="link-group">{TEXT_GENERATOR}</Link>
          </li>
          <li className="">
            <Link to="/" className="link-group">{BOARD}</Link>
          </li>
        </ul>
      </div>
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="logo" />
          <div className="inner-search">
            <input
              className="searchBar"
              type="text"
              placeholder="유저명을 입력해주세요..."
              onChange={(e) => props.actions.updateUsername(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              value={searchingUser}
            />
            <SearchList
              {...state}
              show={isOpen && state.status !== API.INITIAL}
              result={result}
              fetchUser={fetchUser}
            />
            <div className="community-list">
              <div className="community-header">
                <Link to="/" className="community-title">
                  커뮤니티 인기글
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notice />
      <FamousUsers />
    </>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Home);
