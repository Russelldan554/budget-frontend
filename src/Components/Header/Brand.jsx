import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';

const Brand = (props) => {
  return (
    <Link to="/home" className="navbar-brand active">
      {/* These lines were commented out in case we wanted to use an actual svg logo.  The emoji was put as an idea/placeholder */}
      {/* <img src={ logo } width="30" height="30" className="d-inline-block align-top" alt="" /> */}
      <span className="logo" role="img" aria-label="Money Bag">💰</span>
      Moolah
    </Link>
  );
}

export default Brand;
