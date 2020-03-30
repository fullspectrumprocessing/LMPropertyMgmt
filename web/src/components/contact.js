import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './contact.module.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Services = props => {
    const data = useStaticQuery(graphql`
        query {
            inspection: file(relativePath: { eq: "inspection.png" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            maintenance: file(relativePath: { eq: "maintenance.png" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            cleaning: file(relativePath: { eq: "clean.png" }) {
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
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactInfoWrap}>
                    <h2 className={styles.title}>Current tennant </h2>
                    <h3 className={styles.subHeader}>Contact our maintenance team</h3>
                    <div className={styles.contactInfoTextWrap}>
                        <p className={styles.contactLineItem}> Property Manager:</p>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="tel:+12156681066"
                        >
                            <p className={`${styles.contactLineItem}`}>(215) 668 - 1066</p>
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:rrosario@LMPropertyMgmt.com"
                        >
                            <p className={`${styles.contactLineItem}`}>
                                rrosario@LMPropertyMgmt.com
                            </p>
                        </OutboundLink>
                    </div>
                </div>

                <div className={styles.contactInfoWrap}>
                    <h2 className={styles.title}>Interested in a listing</h2>
                    <h3 className={styles.subHeader}>Get information or book a viewing</h3>

                    <div className={styles.contactInfoTextWrap}>
                        <p className={styles.contactLineItem}>Rental Manager:</p>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="tel:+12674659012"
                        >
                            <p className={`${styles.contactLineItem} `}>(267) 465-9012</p>
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:info@LMPropertyMgmt.com"
                        >
                            <p className={`${styles.contactLineItem}  ${styles.emailRental}`}>
                                info@LMPropertyMgmt.com
                            </p>
                            </OutboundLink>
                        </div>
                   
                </div>
            </div>

            <div className={styles.contactFormWrapper}>
                <div> </div>
            </div>
        </>
    )
}

export default Services
