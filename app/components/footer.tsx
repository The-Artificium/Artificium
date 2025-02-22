import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <p className='text-black'> &copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    } as React.CSSProperties,
};

export default Footer;