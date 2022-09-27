import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <nav className='nav'>
        <h1> The MalDb</h1>
        <div>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/order">Order</a>
            <a href="/log in">log in</a>
        </div>
       </nav>
    );
};

export default Header;