import { shallow } from "enzyme";
import React from "react";
import { EditRequest, mapStateToProps } from "../../src/views/request/EditRequest";

describe("The EditRequest component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const editRequest = {
        isLoading: true,
        errors: {},
        success: true,
        request: {},
      };
      const state = { editRequest };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual(editRequest);
    });
  });

  describe("Testing component methods", () => {
    const props = {
      handleEditInputChange: () => 'handleEditInputChange was called',
      editRequest: () => 'editRequest was called',
      getRequest: () => {},
      resetEditReqSucc: () => {},
      request: {
        title: 'title',
        description: 'des',
        type: 'type',
      },
      clearErrors: () => {},
      isLoading: false,
      errors: {
        message: "",
      },
      success: true,
    };
    const editRequestComponent = () => shallow(<EditRequest {...props}/>);
  
    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(EditRequest.prototype, 'componentDidMount');
        editRequestComponent();
        expect(EditRequest.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(EditRequest.prototype, 'componentWillUnmount');
        editRequestComponent().unmount();
        expect(EditRequest.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing handleChange function', () => {
      it('should call handleEditInputChange when called', () => {
        const editRequestComponentInstance = editRequestComponent().instance();
        const event = {
          persist: () => {},
          target: {
            name: 'title',
            value: 'yo'
          }
        }
        const output = editRequestComponentInstance.handleChange(event);
        expect(output).toEqual('handleEditInputChange was called');
      });
    });
    describe('Testing handleSubmit function', () => {
      it('should call editRequest when called', () => {
        const editRequestComponentInstance = editRequestComponent().instance();
        const event = {
          preventDefault: () => {},
        };
        const output = editRequestComponentInstance.handleSubmit(event);
        expect(output).toEqual('editRequest was called');
      });
    });
  });
});
