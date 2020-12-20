import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  HOME, FAMOUS_USER, TEXT_GENERATOR, BOARD,
} from '@app/constants/NAVIGATION';

const Navigation = ({ className = '', subclassName = '', activeIndex = 0 }) => (
  <div className={className}>
    <ul className={subclassName}>
      <li className={classnames({ active: activeIndex === 0 })}>
        <Link to="/" className="link-group">{HOME}</Link>
      </li>
      <li className={classnames({ active: activeIndex === 1 })}>
        <Link to="/fu" className="link-group">{FAMOUS_USER}</Link>
      </li>
      <li className={classnames({ active: activeIndex === 2 })}>
        <Link to="/tg" className="link-group">{TEXT_GENERATOR}</Link>
      </li>
      <li className={classnames({ active: activeIndex === 3 })}>
        <Link to="/bo" className="link-group">{BOARD}</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
