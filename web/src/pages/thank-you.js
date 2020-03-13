import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import ThankYou from "../components/thank-you";

export const query = graphql`
  query ThankYouPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const ThankYouPage = props => {
  const { data } = props;
  const site = (data || {}).site;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
    
        {/* <h1>Thank you Page</h1> */}
       <ThankYou/>
   
    </Layout>

  );
};

export default ThankYouPage;
