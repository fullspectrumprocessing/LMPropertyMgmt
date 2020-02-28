import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        {console.log(props._rawExcerpt)}
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        <h2 className={cn(responsiveTitle3, styles.title)}>${props.price}</h2>
        <h2 className={cn(responsiveTitle3, styles.title)}>{props.bedrooms} Bed/{props.bathrooms} Bath</h2>
        {/* <h3 className={cn(responsiveTitle3, styles.title)}>{props.bathrooms} Bath</h3> */}
        <h2 className={cn(responsiveTitle3, styles.title)}>{props.squareFeet} Sq. Feet</h2>
        <h2 className={cn(responsiveTitle3, styles.title)}>{props.neighborhood}</h2>
        {/* {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
        {/* <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div> */}
      </div>
    </Link>
  )
}

export default BlogPostPreview
