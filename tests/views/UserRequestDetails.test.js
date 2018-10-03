import { shallow } from "enzyme";
import React from "react";
import { UserRequestDetails, mapStateToProps } from "../../src/views/request/UserRequestDetails";

describe("The UserRequestDetails component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const request = {
        isLoading: true,
        errors: {},
        request: {},
      };
      const deleteRequest = {
        isLoading: true,
        errors: {},
        success: false,
      }
      const state = { request, deleteRequest };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual({
        ...request, deleteErrors: deleteRequest.errors, isLoadingDelete: deleteRequest.isLoading,
        deleteSuccess: deleteRequest.success
       });
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      getRequest: () => {},
      errors: {},
      isLoading: false,
      isLoadingDelete: false,
      deleteSuccess: false,
      deleteRequest: () => 'deleteRequest was called',
      resetDeleteReqSucc: () => {},
      request: {
        title: 'title',
        type: 'repair',
        id: 1,
        status: 'pending',
      },
    };
    const UserRequestDetailsComponent = () => shallow(<UserRequestDetails {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(UserRequestDetails.prototype, 'componentDidMount');
        UserRequestDetailsComponent();
        expect(UserRequestDetails.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on page load", () => {
        jest.spyOn(UserRequestDetails.prototype, 'componentWillUnmount');
        UserRequestDetailsComponent().unmount();
        expect(UserRequestDetails.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });

    describe('Testing component methods', () => {
      describe('Testing deleteRequest function', () => {
        it('should call deleteRequest when called', () => {
          const UserRequestDetailsComponentInstance = UserRequestDetailsComponent().instance();
          const output = UserRequestDetailsComponentInstance.deleteRequest();
          expect(output).toEqual('deleteRequest was called');
        });
      });
    });
  });
});
