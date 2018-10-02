import { shallow } from "enzyme";
import React from "react";
import { Nav, mapStateToProps } from '../../src/components/Nav';

describe('Testing Nav component', () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const auth = {
        token: 'token',
        user: {
          username: 'username',
          role: 'user'
        }
      };
      const state = { auth };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual({
        token: auth.token,
        role: auth.user.role,
        username: auth.user.username
      });
    });
  });
  
  describe("Testing component methods", () => {
    const props = {
      history: {
        listen: () => {}
      },
      logout: () => {},
      token: 'token',
      username: 'username',
      role: 'user',
    };
    const NavComponent = () => shallow(<Nav {...props}/>);
    describe('Testing toggleMenu function', () => {
      const NavComponentInstance = NavComponent().instance();
      it('should update the state as expected', () => {
        NavComponentInstance.toggleMenu();
        expect(NavComponentInstance.state.toggleMenuOptions).toEqual({});
      });
      it('should update the state as expected', () => {
        NavComponentInstance.toggleMenu();
        expect(NavComponentInstance.state.toggleMenuOptions).toEqual({
          navHeaderShadow: 'nav-header-shadow',
          notMobile: 'not-mobile',
        });
      });
    });
    describe('Testing toggleDropDown function', () => {
      const NavComponentInstance = NavComponent().instance();
      it('should update the state as expected', () => {
        NavComponentInstance.toggleDropDown('users');
        expect(NavComponentInstance.state.dropDown.users).toEqual('');
      });
      it('should update the state as expected', () => {
        NavComponentInstance.toggleDropDown('users');
        expect(NavComponentInstance.state.dropDown.users).toEqual('hide');
      });
    });
  });
});
