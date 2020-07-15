import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview(props) {
    return (
        <>
            <Link
                className={props.isInList ? styles.inList : styles.inGrid}
                to={getBlogUrl(props.publishedAt, props.slug.current)}
            >
                <div className={styles.wrapper}>
                    <div className={styles.leadMediaThumb}>
                        {props.mainImage && props.mainImage.asset && (
                            <img
                                src={imageUrlFor(buildImageObj(props.mainImage))
                                    .width(600)
                                    .height(Math.floor((9 / 16) * 600))
                                    .auto('format')
                                    .url()}
                                alt={props.mainImage.alt}
                                className={styles.image}
                            />
                        )}
                    </div>
                    <div className={styles.text}>
                        <h2 className={cn(responsiveTitle3, styles.title, styles.price)}>
                            ${props.price}
                        </h2>
                        <h2 className={cn(responsiveTitle3, styles.title)}>
                            {props.bedrooms} Bed/{props.bathrooms} Bath
                        </h2>
                        <h2 className={cn(responsiveTitle3, styles.title)}>
                            {props.squareFeet} Sq. Feet
                        </h2>
                        <h2 className={cn(responsiveTitle3, styles.title)}>{props.neighborhood}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogPostPreview
