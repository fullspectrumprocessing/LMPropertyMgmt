import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import Slider from 'infinite-react-carousel';
import styles from './blog-post.module.css'

function BlogPost (props) {
  console.log(props)
  // const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  const {authors, categories, title, mainImage, postImage1, postImage2, postImage3, publishedAt, _rawDescription, price, bedrooms, bathrooms, neighborhood, squareFeet, address, dateAvailable} = props
  return (
    
    <article className={styles.root}>
      <div className={styles.imageWrap}>
<div className={styles.sliderWrapper}>
<Slider dots >
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
     
      {postImage1 && postImage1.asset && (
        <div className={styles.mainImage}>
      <img
            src={imageUrlFor(buildImageObj(postImage1))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={postImage1.alt}
          />
     </div>
      )}
       {postImage1 && postImage2.asset && (
        <div className={styles.mainImage}>
      <img
            src={imageUrlFor(buildImageObj(postImage2))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={postImage2.alt}
          />
     </div>
      )}
       {postImage1 && postImage3.asset && (
        <div className={styles.mainImage}>
      <img
            src={imageUrlFor(buildImageObj(postImage3))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={postImage3.alt}
          />
     </div>
      )}
  
      </Slider>
      </div>
      </div>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {/* <h3>{_rawDescription[0].children[0].text}</h3> */}
            {/* {_rawBody && <PortableText blocks={_rawBody} />} */}
                 {_rawDescription && <PortableText blocks={_rawDescription} />}
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
            {/* {console.log(_rawDescription[0].children[0].text)} */}
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

   <style jsx>{`
   .carousel-dots li button:before {
    color: white !important;

  }
  
   `}</style>
       </article>
  )
}

export default BlogPost
