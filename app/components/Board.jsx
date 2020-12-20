import React from 'react';
import Navigation from '@app/components/Navigation';

const Board = () => (
  <>
    <Navigation className="sub-navbar" subclassName="sub-navbar-list" activeIndex={3} />
    <div>Board Page</div>
  </>
);

export default Board;
