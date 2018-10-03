import { shallow } from "enzyme";
import React from "react";
import { Signup, mapStateToProps } from "../../src/views/auth/Signup";

describe("The Signup component", () => {
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
      signup: () => {},
      isLoading: false,
      errors: {
        message: "",
      }
    };
    const signupComponent = () => shallow(<Signup {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(Signup.prototype, 'componentDidMount');
        signupComponent();
        expect(Signup.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(Signup.prototype, 'componentWillUnmount');
        signupComponent().unmount();
        expect(Signup.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing handleChange function', () => {
      it('should update the formData state', () => {
        const signupComponentInstance = signupComponent().instance();
        const event = {
          persist: () => {},
          target: {
            name: 'fullname',
            value: 'yo'
          }
        }
        signupComponentInstance.handleChange(event);
        expect(signupComponentInstance.state.formData.fullname).toEqual(event.target.value);
      });
    });
    describe('Testing handleSubmit function', () => {
      it('should be called', () => {
        const signupComponentInstance = signupComponent().instance();
        let count = 0;
        const event = {
          preventDefault: () => count++,
        };
        signupComponentInstance.handleSubmit(event);
        expect(count).toEqual(1);
      });
    });
  });
});
