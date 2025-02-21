import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Welcome to Artificium</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
             
                </ul>
            </nav>
        </header>
    );
};

export default Header;