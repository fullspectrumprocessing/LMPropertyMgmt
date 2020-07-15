import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import Slider from 'infinite-react-carousel'
import styles from './blog-post.module.css'

function BlogPost(props) {
    console.log(props)
    const {
        title,
        mainImage,
        postImage1,
        postImage2,
        postImage3,
        _rawDescription,
        price,
        bedrooms,
        bathrooms,
        neighborhood,
        squareFeet,
        dateAvailable,
    } = props
    return (
        <article className={styles.root}>
            <div className={styles.imageWrap}>
                <div className={styles.sliderWrapper}>
                    <Slider dots arrows={false}>
                        {mainImage && mainImage.asset && (
                            <div className={styles.mainImage}>
                                <img
                                    src={imageUrlFor(buildImageObj(mainImage))
                                        .width(1200)
                                        .height(Math.floor((13 / 16) * 1200))
                                        .fit('crop')
                                        .auto('format')
                                        .url()}
                                    alt={mainImage.alt}
                                />
                            </div>
                        )}

                        {postImage1
                            ? postImage1 &&
                              postImage1.asset && (
                                  <div className={styles.mainImage}>
                                      <img
                                          src={imageUrlFor(buildImageObj(postImage1))
                                              .width(1200)
                                              .height(Math.floor((13 / 16) * 1200))
                                              .fit('crop')
                                              .auto('format')
                                              .url()}
                                          alt={postImage1.alt}
                                      />
                                  </div>
                              )
                            : null}
                        {postImage2
                            ? postImage2 &&
                              postImage2.asset && (
                                  <div className={styles.mainImage}>
                                      <img
                                          src={imageUrlFor(buildImageObj(postImage2))
                                              .width(1200)
                                              .height(Math.floor((13 / 16) * 1200))
                                              .fit('crop')
                                              .auto('format')
                                              .url()}
                                          alt={postImage2.alt}
                                      />
                                  </div>
                              )
                            : null}
                        {postImage3
                            ? postImage3 &&
                              postImage3.asset && (
                                  <div className={styles.mainImage}>
                                      <img
                                          src={imageUrlFor(buildImageObj(postImage3))
                                              .width(1200)
                                              .height(Math.floor((13 / 16) * 1200))
                                              .fit('crop')
                                              .auto('format')
                                              .url()}
                                          alt={postImage3.alt}
                                      />
                                  </div>
                              )
                            : null}
                    </Slider>
                </div>
            </div>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <h1 className={styles.title}>{title}</h1>
                        {_rawDescription && <PortableText blocks={_rawDescription} />}
                        {<PortableText />}
                    </div>
                    <aside className={styles.metaContent}>
                        <h3>${price}</h3>
                        <hr></hr>
                        <div>
                            {bedrooms} Bed/{bathrooms} Bath
                        </div>
                        <div>{squareFeet} Sq. Feet</div>
                        <hr></hr>
                        <div>{neighborhood}</div>
                        <div>{dateAvailable}</div>
                    </aside>
                </div>
            </Container>

            <style jsx>{`
                .carousel-dots li button:before {
                    color: white !important;
                }

                .carousel-arrow button:before {
                    color: white !important;
                }
            `}</style>
        </article>
    )
}

export default BlogPost
