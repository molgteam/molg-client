import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { ROUTE } from '@app/constants/NAVIGATION';

const UserNavigation = ({ username = '', activeTab = ROUTE.FEED }) => (
  <nav className="panel-nav">
    <ul className="tab tab-block">
      <li className={classnames({ 'tab-item': true, active: activeTab === ROUTE.FEED })}><Link to={`${ROUTE.FEED}/${username}`}>피드</Link></li>
      <li className={classnames({ 'tab-item': true, active: activeTab === ROUTE.STORY })}><Link to={`${ROUTE.STORY}/${username}`}>스토리🔒</Link></li>
    </ul>
  </nav>
);

export default UserNavigation;
