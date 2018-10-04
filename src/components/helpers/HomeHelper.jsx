import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const Banner = ({ token }) => (
  <div className="hero">
    <div className="text container">
      <h1>
        Use,
        <br />
        Maintain,
        <br />
        Repair,
        <br />
        Repeat.
        <br />
      </h1>
      <p>
        We take care of your maintenance and
        repair hassles, so you don't have to.
      </p>
      <Link
        to={token ? '/admin/dashboard' : '/signup'}
        className="btn btn-tertiary get-started"
      >
          Get started
      </Link>
    </div>
  </div>
);

Banner.propTypes = {
  token: PropTypes.string,
};

Banner.defaultProps = {
  token: ''
};

export const HomeBody = () => (
  <div className="how-it-works center">
    <h2>How It Works</h2>
    <div className="flex">
      <div>
        <i className="icon ion-paper-airplane" />
        <h4>Make a request</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div>
        <i className="icon ion-leaf" />
        <h4>Request accepted</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div>
        <i className="icon ion-ios-bolt" />
        <h4>Request resolved</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna veniam.
        </p>
      </div>
    </div>
  </div>
);

export const HomeFooter = ({ token }) => (
  <p className="center">
    <Link
      to={token ? '/admin/dashboard' : '/signup'}
      className="btn btn-small btn-primary get-started"
    >
      Click here
    </Link>
    &nbsp;
    to get started
  </p>
);

HomeFooter.propTypes = {
  token: PropTypes.string,
};

HomeFooter.defaultProps = {
  token: ''
};

export default {};
