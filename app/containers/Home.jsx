import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '@app/data/rootAction';
import Notice from '@app/components/Notice';
import FamousUsers from '@app/components/FamousUsers';
import SearchWrapper from '@app/components/SearchWrapper';
import Navigation from '@app/components/Navigation';
import useMounted from '@app/hooks/useMounted';

const Home = (props) => {
  const { mounted } = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const { search } = props;

  const updateIsOpen = useCallback((isOpen) => {
    if (mounted.current) {
      setIsOpen(isOpen);
    }
  }, [isOpen]);
  const updateUsername = useCallback((username) => {
    props.actions.updateUsername(username);
  }, [search.searchingUser]);
  const storeUserInfo = useCallback((user) => {
    setIsOpen(false);
    props.actions.storeUserInfo(user);
  }, []);

  return (
    <>
      <Navigation className="sub-navbar" subclassName="sub-navbar-list" />
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="logo" />
          <div className="inner-search">
            <SearchWrapper
              updateIsOpen={updateIsOpen}
              isOpen={isOpen}
              search={search}
              updateUsername={updateUsername}
              storeUserInfo={storeUserInfo}
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
