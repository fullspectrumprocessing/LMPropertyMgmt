import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Img from 'gatsby-image'
// import { getFluidGatsbyImage } from "gatsby-source-sanity";
// import clientConfig from "../../client-config";
// import heroImage from "../images/lmpmLogo.png";
import { useStaticQuery, graphql } from 'gatsby'
import styles from './home-text-sec.module.css'
import { Link } from 'gatsby'
import Slider from 'infinite-react-carousel'


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
            building2: file(relativePath: { eq: "2413Roma.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            building3: file(relativePath: { eq: "91511thSt.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            building4: file(relativePath: { eq: "861N3rd.jpg" }) {
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
                    <p> Have a question? </p>
                    <p>Our responsive team is here to talk to you. </p>
                </div>
                <div className={styles.buttonA}>
                <Link to="/contact" className={styles.link}>
                    <button className={styles.contactButton}>Contact Us</button>
                </Link>
                </div>
            </div>


            <div className={styles.secWrapper}>
                <div className={styles.textBox}>
                    <p className={styles.textHome}>
                        When you rent from us you can switch to any of our 125 units at 23 different
                        locations with no background checks and no new applications. Look though{' '}
                        <Link className={styles.link} to="/properties">
                            Our Listings.{' '}
                        </Link>
                    </p>
                </div>

                  <Slider dots className={styles.slider} arrows={false}>
                    <div className={styles.imageWrap}>
                        <Img
                            className={styles.image}
                            fluid={data.building.childImageSharp.fluid}
                            alt="brick building"
                        />
                    </div>
                    <div className={styles.imageWrap}>
                        <Img
                            className={styles.image}
                            fluid={data.building2.childImageSharp.fluid}
                            alt="brick building"
                        />
                    </div>
                    <div className={styles.imageWrap}>
                        <Img
                            className={styles.image}
                            fluid={data.building3.childImageSharp.fluid}
                            alt="brick building"
                        />
                    </div>
                    <div className={styles.imageWrap}>
                        <Img
                            className={styles.image}
                            fluid={data.building4.childImageSharp.fluid}
                            alt="brick building"
                        />
                    </div>
                </Slider>
                <style jsx>{`
   .carousel-dots li   button:before {
    color: white !important;
    opacity: .6 !important;
   
  }

  // .carousel-dots button {
  //   opacity: .6;
  // }
  .carousel-dots li  active button {
    color: white !important;
    // opacity: .9 !important;
   
  }

  .carousel-dots li.carousel-dots-active button:before {
    opacity: .9 !important;
  }

  // .carousel-arrow button:before {
  //   color: white !important;
  //   // opacity: .3 !important;
  // }

  .carousel-dots {
    position: absolute !important;
    left: 0% !important;
    right: 25% !important;
    z-index: 100 !important;
    bottom: 10px !important;
    // opacity: 1 !important;

  }
  
   `}</style>
            </div>
        </>
    )
}

export default HomeTextSec
