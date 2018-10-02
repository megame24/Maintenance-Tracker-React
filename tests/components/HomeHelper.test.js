import React from 'react';
import { shallow } from "enzyme";
import { Banner, HomeBody, HomeFooter } from '../../src/components/helpers/HomeHelper';

describe('Testing Banner component', () => {
  it('should render as expected', () => {
    const tree = shallow(<Banner />);
    expect(tree).toMatchSnapshot();
  });
});
describe('Testing HomeBody component', () => {
  it('should render as expected', () => {
    const tree = shallow(<HomeBody />);
    expect(tree).toMatchSnapshot();
  });
});
describe('Testing HomeFooter component', () => {
  it('should render as expected', () => {
    const tree = shallow(<HomeFooter />);
    expect(tree).toMatchSnapshot();
  });
});
