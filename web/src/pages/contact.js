import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Contact from "../components/contact";
import ContactForm from "../components/contactForm";

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
    <Contact />
    <ContactForm />
    </Layout>
  );
};

export default ContactPage;
