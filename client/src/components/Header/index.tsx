import React from 'react'

import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <div className="left-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>BlackNote</div>
            <div className="right-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header