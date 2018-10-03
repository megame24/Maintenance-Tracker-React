import { shallow } from "enzyme";
import React from "react";
import { Login, mapStateToProps } from "../../src/views/auth/Login";

describe("The Login component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const auth = {
        isLoading: true,
        errors: {}
      };
      const state = { auth };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual(auth);
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      login: () => {},
      isLoading: false,
      errors: {
        message: "",
      }
    };
    const LoginComponent = () => shallow(<Login {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(Login.prototype, 'componentDidMount');
        LoginComponent();
        expect(Login.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(Login.prototype, 'componentWillUnmount');
        LoginComponent().unmount();
        expect(Login.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing handleChange function', () => {
      it('should update the formData state', () => {
        const LoginComponentInstance = LoginComponent().instance();
        const event = {
          persist: () => {},
          target: {
            name: 'fullname',
            value: 'yo'
          }
        }
        LoginComponentInstance.handleChange(event);
        expect(LoginComponentInstance.state.formData.fullname).toEqual(event.target.value);
      });
    });
    describe('Testing handleSubmit function', () => {
      it('should be called', () => {
        const LoginComponentInstance = LoginComponent().instance();
        let count = 0;
        const event = {
          preventDefault: () => count++,
        };
        LoginComponentInstance.handleSubmit(event);
        expect(count).toEqual(1);
      });
    });
  });
});
