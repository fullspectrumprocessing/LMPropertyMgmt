import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./services.module.css";



const Services =  props  => {
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
  `);

 return (
<div className={styles.serviceWrapper}>
    
    <div className={styles.maintenanceWrap}>
        <div className={styles.card}>
        <div className={styles.image}>
        <Img  fluid={data.maintenance.childImageSharp.fluid}/>
        </div>
        <h2 className={styles.title}>Maintenance</h2>
        <p className={styles.p}>Our fast responding maintenance team is here to support our tennants around the clock</p>
        </div>
    </div>

    <div className={styles.maintenanceWrap}>
        <div className={styles.card}>
    <div className={styles.image}>
        <Img  fluid={data.inspection.childImageSharp.fluid}/>
        </div>
        <h2 className={styles.title}>Inspections</h2>
        <p className={styles.p}>Our units are thouroughly ispected prior to move in</p>
        </div>
    </div>

    <div className={styles.maintenanceWrap}>
    <div className={styles.card}>
    <div className={styles.image}>
        <Img  fluid={data.cleaning.childImageSharp.fluid}/>
        </div>
        <h2 className={styles.title}>Cleaning Crew</h2>
        <p className={styles.p}>Our excellent clening crew makes sure that your place looks great on move in day</p>
    </div>
    </div>
    
    </div>
 )
 }

export default Services

