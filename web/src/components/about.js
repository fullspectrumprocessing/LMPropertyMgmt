import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './about.module.css'

const About = (props) => {
    const data = useStaticQuery(graphql`
        query {
            team: file(relativePath: { eq: "team.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            building: file(relativePath: { eq: "arch.jpg" }) {
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
            <div className={styles.headerImg}>
                <Img className={styles.bgImage} fluid={data.building.childImageSharp.fluid} />
            </div>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutDiv}>
                    <div className={styles.overlay}>
                        <h2 className={styles.title}>About Us</h2>
                        <div className={styles.aboutText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.{' '}
                        </div>
                    </div>
                </div>
                <div className={styles.teamContainer}>
                    <div className={styles.teamWrap}>
                        <div className={styles.teamText}>
                            <h2 className={styles.title}>Our Team</h2>
                            <div>
                                Our responsive team works hard to make sure that we keep our
                                tennants happy and buildings well maintained{' '}
                            </div>
                        </div>
                        <div className={styles.imageWrap}>
                            <Img className={styles.image} fluid={data.team.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
