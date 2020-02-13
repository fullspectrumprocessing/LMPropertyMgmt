import React from "react";
import Img from "gatsby-image";
// import { getFluidGatsbyImage } from "gatsby-source-sanity";
// import clientConfig from "../../client-config";
// import heroImage from "../images/lmpmLogo.png";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./home-text-sec.module.css";
import {Link} from 'gatsby'

const HomeTextSec = () => {
  const data = useStaticQuery(graphql`
    query {
      building: file(relativePath: { eq: "bigBuilding.jpg" }) {
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
    <div className={styles.firstDiv}>
      <div className={styles.textWrap}>
      <p> Have a question or need anything? </p> 
      <p>Our responsive team are here to talk to you. </p>
      </div>
      <button className={styles.contactButton}>Contact Us</button>
      </div>
    <div className={styles.secWrapper}>
      <div className={styles.textBox}>
        <p className={styles.textHome}>When you rent from us you can switch to any of our 125 units at 23 different locations with No background checks and No new applications. Look though <Link className={styles.link} to="/properties">Our Portfolio. </Link></p>
      </div>
      <div className={styles.imageWrap}>
        <Img  className={styles.image} fluid={data.building.childImageSharp.fluid} alt="brick building"/>
      </div>
    </div>
    </>
  )
}

export default HomeTextSec;
