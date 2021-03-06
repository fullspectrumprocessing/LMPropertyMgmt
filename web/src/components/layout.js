import React from 'react'
import Header from './header'
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "lmpmLogo.png" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
        <Header
            siteTitle={siteTitle}
            onHideNav={onHideNav}
            onShowNav={onShowNav}
            showNav={showNav}
        />
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
              
            
          
                <div className={styles.upperWrapper}>
                <div className={styles.image}>
                  <Img fluid={data.logo.childImageSharp.fluid}/>
                </div>
                    <div className={styles.wrap}>
                      <ul className={styles.navList}>
                        <li className={styles.navTitle} > Navigation</li>
                        <li className={styles.navItem}><Link to="/">Home</Link></li>
                        <li className={styles.navItem}><Link to="/about">About</Link></li>
                        <li className={styles.navItem}><Link to="/services">Services</Link></li>
                        <li className={styles.navItem}><Link to="/properties">Properties</Link></li>
                        <li className={styles.navItem}><Link to="/policies">Policies</Link></li>
                        <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
                       
                      </ul>
                    </div>
                    <div>
                    <div>
                 
                      <ul className={styles.navList} >
                        <li className={styles.navTitle}>Contact</li>
                        <li>205 Arch St</li>
                        <li>Philadelphia, PA 19106</li>
                        <li>(267) 465-9012</li>
                        <li>support@lmpropertymgmt.com</li>
                      </ul>
                    </div>
                    </div>
                    <div></div>
                </div>
                </div>
                <div className={styles.siteInfo}>
                    &copy; {new Date().getFullYear()}, Built with{' '}
                    <a href="https://www.sanity.io">Sanity</a> &amp;
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
          
        </footer>
    </>
)
  }

export default Layout
