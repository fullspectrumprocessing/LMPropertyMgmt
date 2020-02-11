import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ContactPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const ContactPage = props => {
  const { data } = props;
  const site = (data || {}).site;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Contact Page</h1>
      </Container>
    </Layout>
  );
};

export default ContactPage;
