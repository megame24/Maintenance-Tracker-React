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
      const state = { request };
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual(request);
    });
  });

  describe("Testing component methods", () => {
    const props = {
      clearErrors: () => {},
      getRequest: () => {},
      errors: {},
      isLoading: false,
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
  });
});
