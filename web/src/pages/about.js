import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import About from '../components/about'

export const query = graphql`
    query AboutPageQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
            title
            description
            keywords
        }
    }
`

const AboutPage = (props) => {
    const { data } = props
    const site = (data || {}).site

    return (
        <Layout>
            <SEO title={site.title} description={site.description} keywords={site.keywords} />
            <About />
        </Layout>
    )
}

export default AboutPage
