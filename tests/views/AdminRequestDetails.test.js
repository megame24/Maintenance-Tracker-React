import { shallow } from "enzyme";
import React from "react";
import { AdminRequestDetails, mapStateToProps } from "../../src/views/admin/AdminRequestDetails";

describe("The AdminRequestDetails component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const state = {
        request: {
          isLoading: true,
          errors: {},
          request: {},
        },
        reqResolution: {
          isLoading: true,
          errors: {},
          success: false,
        },
        trashRequest: {
          isLoading: true,
          errors: {},
          success: false,
        }
      };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual({
        ...state.request,
        isLoadingResolution: state.reqResolution.isLoading,
        resolutionErrors: state.reqResolution.errors,
        resolutionSuccess: state.reqResolution.success,
        isLoadingTrash: state.trashRequest.isLoading,
        trashErrors: state.trashRequest.errors,
        trashSuccess: state.trashRequest.success,
      });
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      errors: {},
      isLoading: false,
      request: {
        title: 'title',
        type: 'repair',
        id: 1,
        status: 'pending',
      },
      getAllRequests: () => {},
      approveRequest: () => 'approveRequest was called',
      disapproveRequest: () => 'disapproveRequest was called',
      resolveRequest: () => 'resolveRequest was called',
      resetSuccess: () => {},
      isLoadingResolution: false,
      resolutionErrors: {},
      resolutionSuccess: false,
      isLoadingTrash: false,
      trashSuccess: false,
      trashErrors: {},
      getRequestForAdmin: () => {},
      trashRequest: () => 'trashRequest was called',
    };
    const AdminRequestDetailsComp = () => shallow(<AdminRequestDetails {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(AdminRequestDetails.prototype, 'componentDidMount');
        AdminRequestDetailsComp();
        expect(AdminRequestDetails.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(AdminRequestDetails.prototype, 'componentWillUnmount');
        AdminRequestDetailsComp().unmount();
        expect(AdminRequestDetails.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentDidUpdate", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(AdminRequestDetails.prototype, 'componentDidUpdate');
        AdminRequestDetailsComp().setProps({resolutionSuccess: true});
        expect(AdminRequestDetails.prototype.componentDidUpdate.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing resolveRequest function', () => {
      it('should call resolveRequest when called', () => {
        const AdminRequestDetailsCompInstance = AdminRequestDetailsComp().instance();
        const output = AdminRequestDetailsCompInstance.resolveRequest();
        expect(output).toEqual('resolveRequest was called');
      });
    });
    describe('Testing approveRequest function', () => {
      it('should call approveRequest when called', () => {
        const AdminRequestDetailsCompInstance = AdminRequestDetailsComp().instance();
        const output = AdminRequestDetailsCompInstance.approveRequest();
        expect(output).toEqual('approveRequest was called');
      });
    });
    describe('Testing disapproveRequest function', () => {
      it('should call disapproveRequest when called', () => {
        const AdminRequestDetailsCompInstance = AdminRequestDetailsComp().instance();
        const output = AdminRequestDetailsCompInstance.disapproveRequest();
        expect(output).toEqual('disapproveRequest was called');
      });
    });
    describe('Testing trashRequest function', () => {
      it('should call trashRequest when called', () => {
        const AdminRequestDetailsCompInstance = AdminRequestDetailsComp().instance();
        const output = AdminRequestDetailsCompInstance.trashRequest();
        expect(output).toEqual('trashRequest was called');
      });
    });
    describe('Testing handleChange function', () => {
      it('should update the formData state', () => {
        const AdminRequestDetailsCompInstance = AdminRequestDetailsComp().instance();
        const event = {
          persist: () => {},
          target: {
            name: 'feedback',
            value: 'yo'
          }
        }
        AdminRequestDetailsCompInstance.handleChange(event);
        expect(AdminRequestDetailsCompInstance.state.formData.feedback).toEqual(event.target.value);
      });
    });
  });
});
