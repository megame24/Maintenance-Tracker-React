import React from 'react';
import { shallow } from 'enzyme';
import { CreateRequestForm, RequestForm, EditRequestForm } from '../../src/components/form/RequestForms';

const props = {
  handleChange: () => {},
  handleSubmit: () => {},
  title: 'title',
  description: 'des',
  type: 'type',
  success: false,
  isLoading: false,
  errors: {},
}

describe('Testing RequestForm component', () => {
  it('should render as expected', () => {
    const tree = shallow(<RequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
});

describe('testing CreateRequestForm component', () => {
  it('should render as expected when there is no error', () => {
    const tree = shallow(<CreateRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when there is an error', () => {
    props.errors = {
      message: 'error'
    };
    const tree = shallow(<CreateRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when success is true', () => {
    props.success = true;
    const tree = shallow(<CreateRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
});

describe('testing EditRequestForm component', () => {
  const props = {
    handleChange: () => {},
    handleSubmit: () => {},
    title: 'title',
    description: 'des',
    type: 'type',
    success: false,
    isLoading: false,
    errors: {},
  }
  it('should render as expected when there is no error', () => {
    const tree = shallow(<EditRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when there is an error', () => {
    props.errors = {
      message: 'error'
    };
    const tree = shallow(<EditRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when success is true', () => {
    props.success = true;
    const tree = shallow(<EditRequestForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
});

