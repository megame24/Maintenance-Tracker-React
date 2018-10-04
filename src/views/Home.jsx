import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Banner, HomeBody, HomeFooter } from '../components/helpers/HomeHelper';

export const Home = ({ token }) => (
  <section id="landing">
    <Banner token={token} />
    <div className="container">
      <HomeBody />
      <hr />
      <HomeFooter token={token} />
    </div>
  </section>
);

Home.propTypes = {
  token: PropTypes.string,
};

Home.defaultProps = {
  token: ''
};

export const mapStateToProps = ({
  auth: { token }
}) => ({
  token,
});

export default connect(mapStateToProps)(Home);
