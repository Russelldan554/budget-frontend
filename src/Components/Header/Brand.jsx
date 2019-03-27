import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Brand = (props) => {
  return (
    <Link to="/" className="navbar-brand">
      <img src={ logo } width="30" height="30" className="d-inline-block align-top" alt="" />
      Budget APP
    </Link>
  );
}

export default Brand;
