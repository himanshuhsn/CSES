import React from 'react';

// Path to the logo file on your project
import logo from '../assets/logo.png';

const Logo = () => (
    <h1>
        <img src={logo} alt="Education logo" style={{ width: 50 }} />
        CSES
    </h1>
);

export default Logo;