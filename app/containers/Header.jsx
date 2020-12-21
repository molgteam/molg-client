import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@app/data/rootAction';
import useTargetEvent from '@app/hooks/useTargetEvent';
import { Link } from 'react-router-dom';

const Header = (props) => {
  useTargetEvent({ inner: () => props.actions.hideSidebar(false) }, 'dimmed_sidebar');
  const updateProfile = useCallback(() => { console.log('updateProflie'); }, []);

  return (
    <header className="navbar">
      <section className="navbar-section">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => props.actions.showSidebar(true)}
        >
          <i className="fas fa-bars" />
        </button>
      </section>
      <section className="navbar-center">
        <Link to="/">국내최고의 인스타그램 툴 - 몰쥐</Link>
      </section>
      <section className="navbar-section">
        <button type="button" className="btn btn-link" onClick={updateProfile}><i className="fas fa-user-circle" /></button>
      </section>
    </header>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Header);
