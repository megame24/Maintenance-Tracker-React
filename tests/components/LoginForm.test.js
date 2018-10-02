import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../src/components/form/LoginForm';

describe('testing LoginForm component', () => {
  const props = {
    isLoading: false,
    handleChange: () => {},
    handleSubmit: () => {},
    formData: {
      usernameOrEmail: '',
      password: '',
    }
  }
  it('should render as expected when there is no error', () => {
    const tree = shallow(<LoginForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
  it('should render as expected when there is an error', () => {
    props.errors = {
      message: 'error'
    };
    const tree = shallow(<LoginForm {...props} />)
    expect(tree).toMatchSnapshot();
  });
});

