import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black/95 text-white p-4 sticky top-0 z-50 ">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome to Artificium</h1>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-white focus:outline-none" 
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Navigation Menu - Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-primary">Home</a>
                    <a href="/about" className="hover:text-primary">About</a>
                    <a href="/portfolio" className="hover:text-primary">Portfolio</a>
                    <a href="/services" className="hover:text-primary">Services</a>
                </nav>

                {/* Contact Us Button (ONLY VISIBLE ON DESKTOP) */}
                <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80">
                    Contact Us
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-primary/5 text-center py-4 space-y-4 shadow-lg transition-all">
                    <a href="/" className="block hover:text-primary">Home</a>
                    <a href="/about" className="block hover:text-primary">About</a>
                    <a href="/portfolio" className="block hover:text-primary">Portfolio</a>
                    <a href="/services" className="block hover:text-primary">Services</a>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 w-full">
                        Contact Us
                    </button>
                </div>
            )}

        </header>
    );
};

export default Header;
