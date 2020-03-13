import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./thank-you.module.css";



const ThankYou =  props  => {
    const data = useStaticQuery(graphql`
    query {
      city: file(relativePath: { eq: "city.jpg" }) {
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
    <>
<Img className={styles.image} fluid={data.city.childImageSharp.fluid}/>
<div className={styles.overlay}></div>
    <div className={styles.title}>
        
        <p>Thank You for Your Message </p>
    <p > We Will be in Touch Shortly</p>
    </div>
    </>
 )
 }

export default ThankYou
