import React from 'react';
import { shallow } from "enzyme";
import {
  AdminFeedbackAndCtrlBtns, RequestDetail,
  AdminWorkPlace
} from '../../src/components/helpers/RequestDetailsHelper';


const props = {
  statusColor: {
    pending: 'yellow',
  },
  statusMessage: {
    pending: 'pending',
  },
  request: {
    title: 'title',
    type: 'repair',
    id: 1,
    status: 'pending',
  },
  deleteRequest: () => {},
  handleChange: () => {},
  feedback: 'feedback',
  approveRequest: () => {},
  disapproveRequest: () => {},
  resolveRequest: () => {},
  trashRequest: () => {},
}

describe('Testing RequestDetail component', () => {
  it('should render as expected', () => {
    const tree = shallow(<RequestDetail {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing AdminFeedbackAndCtrlBtns component', () => {
  it('should render as expected', () => {
    const tree = shallow(<AdminFeedbackAndCtrlBtns {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing AdminWorkPlace component', () => {
  it('should render as expected', () => {
    const tree = shallow(<AdminWorkPlace {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
