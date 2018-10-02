import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const UsersNav = ({
  notMobile, dropDown, toggleDropDown, username, logout
}) => (
  <ul className={`right-menu ${notMobile} not-mobile-right`}>
    <li key="request" className="request">
      <div>
        <a
          onClick={() => toggleDropDown('request')}
          href="#"
          className="nav-item"
        >
          Requests
          <span>
            <i className="icon ion-android-arrow-dropdown" />
          </span>
        </a>
      </div>
      <div className={`drop-down-menu ${dropDown.request}`}>
        <Link to="/make-request">Make Request</Link>
        <Link to="/view-requests">View Requests</Link>
      </div>
    </li>
    <li key="user" className="user">
      <div>
        <a
          href="#"
          onClick={() => toggleDropDown('users')}
          className="nav-item"
        >
          <span id="display-username">
            Welcome
            &nbsp;
            {username}
          </span>
          <span>
            <i className="icon ion-android-arrow-dropdown" />
          </span>
        </a>
      </div>
      <div className={`drop-down-menu ${dropDown.users}`}>
        <a id="logout" href="#" onClick={logout}>Logout</a>
      </div>
    </li>
  </ul>
);

UsersNav.propTypes = {
  notMobile: PropTypes.string,
  dropDown: PropTypes.shape({}).isRequired,
  toggleDropDown: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

UsersNav.defaultProps = {
  notMobile: '',
};

export const AdminNav = ({
  notMobile, username, dropDown, toggleDropDown, logout
}) => (
  <ul className={`right-menu ${notMobile} not-mobile-right`}>
    <li className="admin">
      <div>
        <a
          onClick={() => toggleDropDown('admin')}
          href="#"
          className="nav-item"
        >
          <span id="display-username">
            Welcome
            &nbsp;
            {username}
          </span>
          <span>
            <i className="icon ion-android-arrow-dropdown" />
          </span>
        </a>
      </div>
      <div className={`drop-down-menu ${dropDown.admin}`}>
        <Link to="/dashboard">Dashboard</Link>
        <a id="logout" href="#" onClick={logout}>Logout</a>
      </div>
    </li>
  </ul>
);

AdminNav.propTypes = {
  notMobile: PropTypes.string,
  dropDown: PropTypes.shape({}).isRequired,
  toggleDropDown: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

AdminNav.defaultProps = {
  notMobile: '',
};

export const GuestNav = ({
  notMobile
}) => (
  <ul className={`right-menu ${notMobile} not-mobile-right`}>
    <li>
      <Link to="/login" className="nav-item">Login</Link>
    </li>
    <li>
      <Link to="/signup" className="nav-item">Sign Up</Link>
    </li>
  </ul>
);

GuestNav.propTypes = {
  notMobile: PropTypes.string,
};

GuestNav.defaultProps = {
  notMobile: '',
};

export const NavHeader = ({
  navHeaderShadow, toggleMenu,
}) => (
  <div className={`nav-header ${navHeaderShadow} not-mobile-left`}>
    <Link to="/">M-Tracker</Link>
    <span className="mobile toggle-menu" onClick={toggleMenu}>
      <i className="icon ion-android-menu" />
    </span>
    <div className="clearfix" />
  </div>
);

NavHeader.propTypes = {
  navHeaderShadow: PropTypes.string,
  toggleMenu: PropTypes.func.isRequired,
};

NavHeader.defaultProps = {
  navHeaderShadow: '',
};

export default {};
