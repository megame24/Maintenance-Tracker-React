
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import authActions from '../actions/authActions';
import { UsersNav, AdminNav, GuestNav, NavHeader } from './helpers/NavHelper';

/**
 * Nav component
 */
export class Nav extends React.Component {
  /**
   * @returns {null} null
   */
  constructor() {
    super();
    this.state = {
      toggleMenuOptions: {
        navHeaderShadow: 'nav-header-shadow',
        notMobile: 'not-mobile',
      },
      dropDown: {
        request: 'hide',
        users: 'hide',
        admin: 'hide',
      },
    };
    this.logout = this.logout.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  /**
   * logout
   * @returns {undefined}
   */
  logout() {
    const { logout } = this.props;
    return logout();
  }

  /**
   * toggle between mobile and desktop nav
   * @returns {undefined}
   */
  toggleMenu() {
    const { toggleMenuOptions } = this.state;
    if (Object.keys(toggleMenuOptions).length) {
      this.setState({ toggleMenuOptions: {} });
    } else {
      this.setState({
        toggleMenuOptions: {
          navHeaderShadow: 'nav-header-shadow',
          notMobile: 'not-mobile',
        }
      });
    }
  }

  /**
   * toggle drop down display
   * @param {String} element element identifier
   * @returns {undefined}
   */
  toggleDropDown(element) {
    const { dropDown } = this.state;
    const newDropDown = { ...dropDown };
    if (newDropDown[element]) {
      newDropDown[element] = '';
      this.setState({ dropDown: newDropDown });
    } else {
      newDropDown[element] = 'hide';
      this.setState({ dropDown: newDropDown });
    }
  }

  /**
   * @returns {Function} jsx
   */
  render() {
    const { token, username, role } = this.props;
    const {
      toggleMenuOptions: { notMobile, navHeaderShadow },
      dropDown,
    } = this.state;
    return (
      <nav>
        <div className="mobile-container container">
          <NavHeader
            navHeaderShadow={navHeaderShadow}
            toggleMenu={this.toggleMenu}
          />
          {
            token && role === 'admin'
            && (
              <AdminNav
                username={username}
                toggleDropDown={this.toggleDropDown}
                dropDown={dropDown}
                notMobile={notMobile}
                logout={this.logout}
              />
            )
          }
          {
            token && role === 'user'
            && (
              <UsersNav
                username={username}
                toggleDropDown={this.toggleDropDown}
                dropDown={dropDown}
                notMobile={notMobile}
                logout={this.logout}
              />
            )
          }
          {
            !token && <GuestNav />
          }
          <div className="clearfix" />
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  token: PropTypes.string,
  username: PropTypes.string,
  role: PropTypes.string,
};

Nav.defaultProps = {
  token: '',
  username: '',
  role: '',
};

export const mapStateToProps = (state) => {
  const { token, user: { username, role } } = state.auth;
  return {
    token,
    username,
    role
  };
};

export default connect(mapStateToProps, {
  logout: authActions.logout
})(Nav);
