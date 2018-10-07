import { shallow } from "enzyme";
import React from "react";
import { Dashboard, mapStateToProps } from "../../src/views/admin/Dashboard";

describe("The Dashboard component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const state = {
        allRequests: {
          isLoading: true,
          errors: {},
          requests: [],
        },
        reqResolution: {
          isLoading: true,
          errors: {},
          success: false,
        }
      };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual({
        ...state.allRequests,
        isLoadingResolution: state.reqResolution.isLoading,
        resolutionErrors: state.reqResolution.errors,
        resolutionSuccess: state.reqResolution.success,
      });
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      errors: {},
      isLoading: false,
      requests: [{
        title: 'title',
        type: 'repair',
        id: 1,
        status: 'pending',
      }],
      getAllRequests: () => 'getAllRequests was called',
      approveRequest: () => 'approveRequest was called',
      disapproveRequest: () => 'disapproveRequest was called',
      resolveRequest: () => 'resolveRequest was called',
      resetSuccess: () => {},
      isLoadingResolution: false,
      resolutionErrors: {},
      resolutionSuccess: false,
    };
    const DashboardComponent = () => shallow(<Dashboard {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(Dashboard.prototype, 'componentDidMount');
        DashboardComponent();
        expect(Dashboard.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(Dashboard.prototype, 'componentWillUnmount');
        DashboardComponent().unmount();
        expect(Dashboard.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentDidUpdate", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(Dashboard.prototype, 'componentDidUpdate');
        DashboardComponent().setProps({resolutionSuccess: true});
        expect(Dashboard.prototype.componentDidUpdate.mock.calls.length).toEqual(1);
      });
    });
    describe('Testing filterRequests function', () => {
      it('should call getAllRequests when called', () => {
        const DashboardComponentInstance = DashboardComponent().instance();
        const event = {
          target: {
            value: 'repair'
          }
        }
        const output = DashboardComponentInstance.filterRequests(event);
        expect(output).toEqual('getAllRequests was called');
      });
    });
    describe('Testing resolveRequest function', () => {
      it('should call resolveRequest when called', () => {
        const DashboardComponentInstance = DashboardComponent().instance();
        const output = DashboardComponentInstance.resolveRequest();
        expect(output).toEqual('resolveRequest was called');
      });
    });
    describe('Testing approveRequest function', () => {
      it('should call approveRequest when called', () => {
        const DashboardComponentInstance = DashboardComponent().instance();
        const output = DashboardComponentInstance.approveRequest();
        expect(output).toEqual('approveRequest was called');
      });
    });
    describe('Testing disapproveRequest function', () => {
      it('should call disapproveRequest when called', () => {
        const DashboardComponentInstance = DashboardComponent().instance();
        const output = DashboardComponentInstance.disapproveRequest();
        expect(output).toEqual('disapproveRequest was called');
      });
    });
  });
});
