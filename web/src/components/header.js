import {Link, graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Logo from "../images/lmpmLogo.png"

import styles from './header.module.css'




const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  



  return (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        {/* <Link to='/'>{siteTitle}</Link> */}
        <Link to="/" ><img className={styles.image} src={Logo}/></Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
        <li >
            <Link to='/'>Home</Link>
          </li>
          <li >
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/services/'>Services</Link>
          </li>
          <li>
            <Link to='/properties/'>Properties</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)}

export default Header
