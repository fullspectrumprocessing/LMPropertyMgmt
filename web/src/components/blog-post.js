import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost (props) {
  console.log(props)
  // const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  const {authors, categories, title, mainImage, publishedAt, _rawDescription, price, bedrooms, bathrooms, neighborhood, squareFeet, address, dateAvailable} = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {/* <h3>{_rawDescription[0].children[0].text}</h3> */}
            {/* {_rawBody && <PortableText blocks={_rawBody} />} */}
            {<PortableText />}
          </div>
          <aside className={styles.metaContent}>
            {/* {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )} */}
            {console.log(_rawDescription[0].children[0].text)}
          <h3>${price}</h3>
          <hr></hr>
          {/* <h3>{_rawDescription[0].children[0].text}</h3> */}
            <div >{bedrooms} Bed/{bathrooms} Bath</div>
            <div>{squareFeet} Sq. Feet</div>
            <hr></hr>
            <div>{neighborhood}</div>
            <div>{dateAvailable}</div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
