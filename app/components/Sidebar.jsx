import toggle from '@app/hocs/toggle';
import React from 'react';
import Navigation from './Navigation';

const Sidebar = () => (
  <>
    <div className="sidebar-wrapper">
      <div className="inner-sidebar">
        <a className="profile" href="#">
          <span>
            <i className="fas fa-user-circle" />
          </span>
          <span>
            <span className="login-text">로그인</span>
            <i className="fas fa-chevron-right" />
          </span>
        </a>
        <ul className="subscribe">
          <li className="bg-warning">
            <a href="#">
              <span>구독하러가기</span>
              <i className="fas fa-chevron-right" />
            </a>
          </li>
        </ul>
        <Navigation subclassName="list-navbar" />
      </div>
    </div>
    <div className="dimmed_sidebar" />
  </>
);

export default toggle(Sidebar);
