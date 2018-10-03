import React from 'react';
import { shallow } from "enzyme";
import { Table, TableRow, NoRequests } from '../../src/components/helpers/ViewRequestsHelper';


const props = {
  statusColor: {
    pending: 'yellow',
  },
  statusMessage: {
    pending: 'pending',
  },
}

describe('Testing TableRow component', () => {
  props.request = {
    title: 'title',
    type: 'repair',
    id: 1,
    status: 'pending',
  },
  it('should render as expected', () => {
    const tree = shallow(<TableRow {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Table component', () => {
  props.requests = [{
    title: 'title',
    type: 'repair',
    id: 1,
    status: 'pending',
  }],
  it('should render as expected', () => {
    const tree = shallow(<Table {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing NoRequests component', () => {
  it('should render as expected', () => {
    const tree = shallow(<NoRequests />);
    expect(tree).toMatchSnapshot();
  });
});
