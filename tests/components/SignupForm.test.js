import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../src/components/form/SignupForm';

describe('testing SignupForm component', () => {
  const props = {
    isLoading: false,
    handleChange: () => {},
    handleSubmit: () => {},
    formData: {
      fullname: '',
      password: '',
      username: '',
      email: '',
    }
  }
  it('should render as expected when there is no error', () => {
    const tree = shallow(<SignupForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when there is an error', () => {
    props.errors = {
      message: 'error'
    };
    const tree = shallow(<SignupForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
});

