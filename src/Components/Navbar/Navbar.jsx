import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/users'}>Users</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </nav>
    );
};

export default Navbar;