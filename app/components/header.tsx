import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome to Artificium</h1>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <li><a href="/" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;