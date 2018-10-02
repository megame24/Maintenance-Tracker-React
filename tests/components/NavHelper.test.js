import React from 'react';
import { shallow } from "enzyme";
import { UsersNav, AdminNav, GuestNav, NavHeader } from '../../src/components/helpers/NavHelper';

describe('Testing UsersNav component', () => {
  it('should render as expected', () => {
    const props = {
      logout: () => {},
      notMobile: 'not-mobile',
      dropDown: {},
      toggleDropDown: () => {},
      username: 'username',
    }
    const tree = shallow(<UsersNav {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing AdminNav component', () => {
  it('should render as expected', () => {
    const props = {
      logout: () => {},
      notMobile: 'not-mobile',
      dropDown: {},
      toggleDropDown: () => {},
      username: 'username',
    }
    const tree = shallow(<AdminNav {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing GuestNav component', () => {
  it('should render as expected', () => {
    const tree = shallow(<GuestNav />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing NavHeader component', () => {
  it('should render as expected', () => {
    const props = {
      navHeaderShadow: 'nav-header-shadow',
      toggleMenu: () => {},
    }
    const tree = shallow(<NavHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
