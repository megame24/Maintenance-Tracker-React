import React from 'react';
import { shallow } from "enzyme";
import Footer from '../../src/components/Footer';

describe('Testing Footer component', () => {
  it('should render as expected', () => {
    const tree = shallow(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
