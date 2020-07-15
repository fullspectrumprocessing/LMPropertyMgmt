import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";
import styles from "./blog-post-preview-list.module.css";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <Link to="/properties">{props.title && <h2 className={styles.headline}>{props.title}</h2>}</Link>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className={styles.listing}>
              <BlogPostPreview {...node} isInList />
              {console.log(node)}
            </li>
          ))}
      </ul>

      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to="/properties">See All Listings</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;
