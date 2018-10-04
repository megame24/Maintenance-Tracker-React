import React from 'react';
import { shallow } from "enzyme";
import { Home, mapStateToProps } from '../../src/views/Home';


describe("Testing mapStateToProps", () => {
  it("should map the state to the props correctly", () => {
    const auth = {
      token: ''
    };
    const state = { auth };
    const componentState = mapStateToProps(state);
    expect(componentState).toEqual(auth);
  });
});

describe('Testing Home component', () => {
  it('should render as expected', () => {
    const tree = shallow(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
