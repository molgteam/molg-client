import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  HOME, FAMOUS_USER, TEXT_GENERATOR, BOARD, ROUTE,
} from '@app/constants/NAVIGATION';

const Navigation = ({
  className = '', subclassName = '', activeTab = '/', hideSidebar = () => {},
}) => (
  <div className={className}>
    <ul className={subclassName}>
      <li className={classnames({ active: activeTab === ROUTE.HOME })}>
        <Link to="/" className="link-group" onClick={() => hideSidebar(false)}>{HOME}</Link>
      </li>
      <li className={classnames({ active: activeTab === ROUTE.FAMOUS_USER })}>
        <Link to="/fu" className="link-group" onClick={() => hideSidebar(false)}>{FAMOUS_USER}</Link>
      </li>
      <li className={classnames({ active: activeTab === ROUTE.TEXT_GENERATOR })}>
        <Link to="/tg" className="link-group" onClick={() => hideSidebar(false)}>{TEXT_GENERATOR}</Link>
      </li>
      <li className={classnames({ active: activeTab === ROUTE.BOARD })}>
        <Link to="/bo" className="link-group" onClick={() => hideSidebar(false)}>{BOARD}</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
