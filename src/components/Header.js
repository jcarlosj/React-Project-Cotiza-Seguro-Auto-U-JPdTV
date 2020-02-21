import React from 'react';

const Header = ({ title }) => {     // Destructuracion del props
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    );
}

export default Header;