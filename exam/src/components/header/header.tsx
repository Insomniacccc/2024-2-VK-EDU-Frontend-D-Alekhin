import React from 'react';

import './header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="header__logo">
                <a href='/' className="header__link">
                    VK Translate
                </a>
            </h1>
            <a className="header__history-button" href="/history">
                <span>История</span>
            </a>
        </div>
    );
}

export default Header;
