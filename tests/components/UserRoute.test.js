import { shallow, mount } from 'enzyme';
import React from 'react';
import { Router, Redirect } from 'react-router-dom';

import { UserRoute, mapStateToProps } from '../../src/components/routes/UserRoute.jsx';

describe('The User Route component', () => {
  const state = {
    auth: {
      token: 'token',
      user: {
        role: 'user',
      }
    }
  };
  describe('Testing mapStateToProps function', () => {
    it('should map state to props', () => {
      const componentState = mapStateToProps(state);
      expect(componentState).toEqual({ token: state.auth.token, role: state.auth.user.role });
    });
  });
  describe('Testing User Route component itself', () => {
    const props = {
      token: 'token',
      role: 'user',
      component: () => (
        <p>hello</p>
      )
    }
    it('should render a passed in component if there is a token and role equals user', () => {
      const history = {
        location: {
          pathname: '/'
        },
        listen: () => {}
      };
      // const tree = shallow(<UserRoute {...props} />);
      // expect(tree).toMatchSnapshot();
      const output = UserRoute({ ...props });
      const wrapper = mount(<Router history={history}>{output}</Router>);
      expect(wrapper.contains(<p>hello</p>)).toEqual(true);
    });
  });
});
