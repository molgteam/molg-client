import React from 'react';
import { Link } from 'react-router-dom';
import {
  HOME, FAMOUS_USER, TEXT_GENERATOR, BOARD,
} from '@app/constants/NAVIGATION';

const Navigation = ({ className = '', subclassName = '' }) => (
  <div className={className}>
    <ul className={subclassName}>
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
);

export default Navigation;
