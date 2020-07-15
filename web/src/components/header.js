import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import Logo from '../images/lmpmLogo.png'
import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav }) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.branding}>
                    <Link to="/">
                        <img className={styles.image} src={Logo} />
                    </Link>
                </div>

                <button
                    className={styles.toggleNavButton}
                    onClick={showNav ? onHideNav : onShowNav}
                >
                    <Icon symbol="hamburger" />
                </button>

                <nav className={cn(styles.nav, showNav && styles.showNav)}>
                    <ul>
                        <li>
                            <Link to="/" activeStyle={{ color: '#66c8d4' }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about/" activeStyle={{ color: '#66c8d4' }}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/" activeStyle={{ color: '#66c8d4' }}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/properties/" activeStyle={{ color: '#66c8d4' }}>
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact/" activeStyle={{ color: '#66c8d4' }}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
