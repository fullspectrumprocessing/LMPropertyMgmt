import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './home-hero.module.css'
import Fade from 'react-reveal/Fade'

const HomeHero = () => {
    const data = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "b&w.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <>
            <div className={styles.heroDiv}>
                <Img
                    className={styles.image}
                    fluid={data.background.childImageSharp.fluid}
                    alt="building"
                    imgStyle={{ objectPosition: 'top' }}
                />
                <div className={styles.overlay}></div>
                <Fade bottom>
                    {' '}
                    <h1 className={styles.headingText}>Tagline for site goes here</h1>
                </Fade>
            </div>
        </>
    )
}

export default HomeHero
