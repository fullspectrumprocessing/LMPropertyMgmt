import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      {/* <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
          
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
              {console.log(node)}
            </li>
          ))}
      </ul> */}
          <ul className={styles.grid}>
        
          
        <li key={props.nodes[0].id}>
          <BlogPostPreview {...props.nodes[0]} isInList />
          {console.log(props.nodes[0])}
        </li>
    
  </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
