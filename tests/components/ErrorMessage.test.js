import React from 'react';
import { shallow } from "enzyme";
import ErrorMessage from '../../src/components/ErrorMessage';

describe('Testing ErrorMessage component', () => {
  it('should render as expected when there is an error', () => {
    const errors = {
      message: 'error'
    }
    const tree = shallow(<ErrorMessage errors={errors} />);
    expect(tree).toMatchSnapshot();
  });
  it('should return null when there is no error', () => {
    const errors = {};
    const tree = shallow(<ErrorMessage errors={errors} />);
    expect(tree).toBeNull;
  });
});
