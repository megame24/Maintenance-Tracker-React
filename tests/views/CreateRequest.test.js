import { shallow } from "enzyme";
import React from "react";
import { CreateRequest, mapStateToProps } from "../../src/views/request/CreateRequest";

describe("The CreateRequest component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const createRequest = {
        isLoading: true,
        errors: {},
        success: true,
      };
      const state = { createRequest };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual(createRequest);
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      createRequest: () => {},
      resetSuccess: () => {},
      isLoading: false,
      errors: {
        message: "",
      },
      success: true,
    };
    const createRequestComponent = () => shallow(<CreateRequest {...props}/>);
  
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(CreateRequest.prototype, 'componentWillUnmount');
        createRequestComponent().unmount();
        expect(CreateRequest.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing handleChange function', () => {
      it('should update the formData state', () => {
        const createRequestComponentInstance = createRequestComponent().instance();
        const event = {
          persist: () => {},
          target: {
            name: 'title',
            value: 'yo'
          }
        }
        createRequestComponentInstance.handleChange(event);
        expect(createRequestComponentInstance.state.formData.title).toEqual(event.target.value);
      });
    });
    describe('Testing handleSubmit function', () => {
      it('should be called', () => {
        const createRequestComponentInstance = createRequestComponent().instance();
        let count = 0;
        const event = {
          preventDefault: () => count++,
        };
        createRequestComponentInstance.handleSubmit(event);
        expect(count).toEqual(1);
      });
    });
  });
});
