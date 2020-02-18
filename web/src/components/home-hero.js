import React from "react";
import Img from "gatsby-image";
// import { getFluidGatsbyImage } from "gatsby-source-sanity";
// import clientConfig from "../../client-config";
// import heroImage from "../images/lmpmLogo.png";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./home-hero.module.css";

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
  `);
  return (
    <>
      <div className={styles.heroDiv}>
        <Img
          className={styles.image}
          fluid={data.background.childImageSharp.fluid}
          alt="building"
          imgStyle={{ objectPosition: "top" }}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.headingText}>I am Heading Text</h1>
      </div>
    </>
  );
};

export default HomeHero;