import { shallow } from "enzyme";
import React from "react";
import { ViewRequests, mapStateToProps } from "../../src/views/request/ViewRequests";

describe("The ViewRequests component", () => {
  describe("Testing mapStateToProps", () => {
    it("should map the state to the props correctly", () => {
      const userRequests = {
        isLoading: true,
        errors: {},
        requests: [],
      };
      const state = { userRequests };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual(userRequests);
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      getUserRequests: () => {},
      errors: {},
      isLoading: false,
      requests: [{
        title: 'title',
        type: 'repair',
        id: 1,
        status: 'pending',
      }],
    };
    const ViewRequestsComponent = () => shallow(<ViewRequests {...props}/>);

    describe("Testing componentDidMount", () => {
      it("should be called on page load", () => {
        jest.spyOn(ViewRequests.prototype, 'componentDidMount');
        ViewRequestsComponent();
        expect(ViewRequests.prototype.componentDidMount.mock.calls.length).toEqual(1);
      });
    });
    describe("Testing componentWillUnmount", () => {
      it("should be called on leaving page", () => {
        jest.spyOn(ViewRequests.prototype, 'componentWillUnmount');
        ViewRequestsComponent().unmount();
        expect(ViewRequests.prototype.componentWillUnmount.mock.calls.length).toEqual(1);
      });
    });
  });
});
