import React from 'react';
import { shallow } from "enzyme";
import Home from '../../src/views/Home';

describe('Testing Home component', () => {
  it('should render as expected', () => {
    const tree = shallow(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
