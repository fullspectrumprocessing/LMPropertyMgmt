import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './contact.module.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Contact = props => {
   

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
                            className={styles.outboundLink}
                        >
                            <p className={styles.contactLineItem}>(215) 668 - 1066</p>
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:rrosario@LMPropertyMgmt.com"
                            className={styles.outboundLink}
                        >
                            <p className={styles.contactLineItem}>
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
                            className={styles.outboundLink}
                        >
                            <p className={styles.contactLineItem}>(267) 465-9012</p>
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:info@LMPropertyMgmt.com"
                            className={styles.outboundLink}
                        >
                            <p className={styles.contactLineItem}>
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

export default Contact
