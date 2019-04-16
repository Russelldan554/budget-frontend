import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Entry extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onRedirectTrue = this.onRedirectTrue.bind(this);
    this.state = {
      redirectToHome: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.onRedirectTrue();
    }
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  onRedirectTrue() {
    this.setState({
      redirectToHome: true
    });
  }

  render() {
    if (this.state.redirectToHome === true) {
      return <Redirect to={{pathname: "/home"}} />
    }

    return (
      <div>
        {React.cloneElement(this.props.children, { 
          handleChange: this.handleChange,
          parentClass: this.parentClass,
          submitForm: this.submitForm,
          onRedirectTrue: this.onRedirectTrue
        })}
      </div>
    );
  }
}

export default Entry;
