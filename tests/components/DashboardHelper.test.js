import React from 'react';
import { shallow, mount } from "enzyme";
import {
  Table, ApproveAndDisapproveColumn, ResolveColumn,
  TitleColumn,
} from '../../src/components/helpers/DashboardHelper';


describe('Testing TitleColumn component', () => {
  const request = {
    title: 'title',
    type: 'repair',
    id: 1,
    status: 'pending',
  };
  it('should render as expected', () => {
    const tree = shallow(<TitleColumn request={request} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Table component', () => {
  const props = {
      requests: [{
      title: 'title',
      type: 'repair',
      id: 1,
      status: 'pending',
    }],
    approveRequest: () => {},
    disapproveRequest: () => {},
    resolveRequest: () => {},
  };
  it('should render as expected', () => {
    const tree = shallow(<Table {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing ResolveColumn component', () => {
  const props = {
      request: {
      title: 'title',
      type: 'repair',
      id: 1,
      status: 'approved',
    },
    resolveRequest: () => {},
  };
  it('should render as expected when request status is pending', () => {
    const tree = shallow(<ResolveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when request status is resolved', () => {
    props.request.status = 'resolved'
    const tree = shallow(<ResolveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
});



describe('Testing ApproveAndDisapproveColumn component', () => {
  const props = {
      request: {
      title: 'title',
      type: 'repair',
      id: 1,
      status: 'pending',
    },
    approveRequest: () => {},
    disapproveRequest: () => {},
  };
  it('should render as expected when request status is pending', () => {
    const tree = shallow(<ApproveAndDisapproveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when request status is approved', () => {
    props.request.status = 'approved'
    const tree = shallow(<ApproveAndDisapproveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when request status is disapproved', () => {
    props.request.status = 'disapproved'
    const tree = shallow(<ApproveAndDisapproveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when request status is resolved', () => {
    props.request.status = 'resolved'
    const tree = shallow(<ApproveAndDisapproveColumn {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
