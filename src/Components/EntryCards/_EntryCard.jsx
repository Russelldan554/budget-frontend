import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class EntryCards extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onRedirectTrue = this.onRedirectTrue.bind(this);
    this.onRedirectLogin = this.onRedirectLogin.bind(this);
    this.state = {
      redirectToHome: false,
      redirectToLogin: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.onRedirectTrue();
    }
  }

  onRedirectTrue() {
    this.setState({
      redirectToHome: true,
    });
  }

  onRedirectLogin() {
    this.setState({
      redirectToLogin: true,
    });
  }

  async handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      children,
    } = this.props;

    const {
      redirectToHome,
      redirectToLogin,
    } = this.state;

    if (redirectToHome === true) {
      return <Redirect to={{ pathname: '/home' }} />;
    }

    if (redirectToLogin === true) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <div>
        {React.cloneElement(children, {
          handleChange: this.handleChange,
          parentClass: this.parentClass,
          submitForm: this.submitForm,
          onRedirectTrue: this.onRedirectTrue,
          onRedirectLogin: this.onRedirectLogin,
        })}
      </div>
    );
  }
}

EntryCards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EntryCards;
