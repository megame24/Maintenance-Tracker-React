import React from 'react';
import { Banner, HomeBody, HomeFooter } from '../components/helpers/HomeHelper';

const Home = () => (
  <section id="landing">
    <Banner />
    <div className="container">
      <HomeBody />
      <hr />
      <HomeFooter />
    </div>
  </section>
);

export default Home;
