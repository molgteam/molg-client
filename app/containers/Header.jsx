import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@app/data/rootAction';

const Header = () => {
  const openSidebar = useCallback(() => { console.log('sidebar'); }, []);
  const updateProfile = useCallback(() => { console.log('updateProflie'); }, []);
  return (
    <header className="navbar">
      <section className="navbar-section">
        <button type="button" className="btn btn-link" onClick={openSidebar}><i className="fas fa-bars" /></button>
      </section>
      <section className="navbar-center">국내최고의 인스타그램 툴 - 몰쥐</section>
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
