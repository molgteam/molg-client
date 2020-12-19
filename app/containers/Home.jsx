import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '@app/data/rootAction';
import Notice from '@app/components/Notice';
import FamousUsers from '@app/components/FamousUsers';
import SearchWrapper from '@app/components/SearchWrapper';
import Navigation from '@app/components/Navigation';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { search } = props;

  const fetchUser = useCallback((user) => {
    props.actions.fetchUser(user);
  }, []);

  const updateUsername = useCallback((username) => {
    props.actions.updateUsername(username);
  }, [search.searchingUser]);

  return (
    <>
      <Navigation className="sub-navbar" subclassName="sub-navbar-list" />
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="logo" />
          <div className="inner-search">
            <SearchWrapper
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              search={search}
              updateUsername={updateUsername}
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
