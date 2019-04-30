import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';

const Brand = () => (
  <Link to="/home" className="navbar-brand active">
    {/*
      These lines were commented out in case we wanted to use an actual svg
      logo.  The emoji was put as an idea/placeholder

      <img
        alt=""
        className="d-inline-block align-top"
        src={ logo } height="30" width="30"
      />

    */}

    <span className="logo" role="img" aria-label="Money Bag">💰</span>
    {'Moolah'}
  </Link>
);

export default Brand;
