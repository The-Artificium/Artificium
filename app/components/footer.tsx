import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='text-center p-6 bg-black/90'>
            <p className='text-white'> &copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;