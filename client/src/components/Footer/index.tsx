import React from 'react'
import { connect } from 'react-redux'

import { toggleStartWritingMenu } from '../../redux/appSlice'
import { DispatchToProps } from '../../interfaces'

import './Footer.scss'

interface FooterProps {
    toggleStartWritingMenu?: Function,
}

const Footer: React.FC<FooterProps> = ({ 
    toggleStartWritingMenu: toggleMenu 
}) => {
    return (
        <footer>
            <ul>
                <li>
                    <i className="fas fa-bars"></i>
                </li>
                <li>
                    <i className="fas fa-search"></i>
                </li>
                <li 
                    className="plus"
                    onClick={() => toggleMenu && toggleMenu()}
                >
                    <div className="plus-not-clicked">
                        <i className="fas fa-plus"></i>
                    </div>
                </li>
                <li>
                    <i className="fas fa-star"></i>
                </li>
                <li>
                    <i className="fas fa-check-circle"></i>
                </li>
            </ul>
        </footer>
    )
}

const mapDispatchToProps: DispatchToProps = {
    toggleStartWritingMenu,
}

export default connect(null, mapDispatchToProps)(Footer)