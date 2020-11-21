import React from 'react';
import PropTypes from "prop-types";
import {AppRoute, AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {
  const {authorizationStatus, userAvatar, className, render} = props;

  return <header className={`page-header ${className ? className : ``}`}>
    <div className="logo">
      <a className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    {render()}

    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src={userAvatar} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
        : <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>
      }
    </div>
  </header>;
};

Header.defaultProps = {
  render: () => {}
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  className: PropTypes.string,
  render: PropTypes.func,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userAvatar: USER.user ? USER.user.avatar_url : null,
});

export {Header};
export default connect(mapStateToProps)(Header);
