import React from 'react';
import Navigation from './Navigation';

const FamousUsers = ({ isNav }) => (
  <>
    {isNav && <Navigation className="sub-navbar" subclassName="sub-navbar-list" activeIndex={1} />}
    <div className="container">
      <h3 className="sectionTitle">인기유저</h3>
      <div className="columns">
        <div className="column col-4 col-xs-12">
          <div className="card">
            <div className="card-image">
              <img className="img-responsive" src="https://i.pinimg.com/originals/3c/40/44/3c404407879dfad72f02fd5a6b147e56.jpg" alt="OS X El Capitan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default FamousUsers;
