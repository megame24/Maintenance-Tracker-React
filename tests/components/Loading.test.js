import React from 'react';
import { shallow } from "enzyme";
import Loading from '../../src/components/Loading';

describe('Testing Loading component', () => {
  it('should render as expected', () => {
    const tree = shallow(<Loading isLoading={false} />);
    expect(tree).toMatchSnapshot();
  });
});
