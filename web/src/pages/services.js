import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Services from '../components/services'

export const query = graphql`
    query ServicesPageQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
            title
            description
            keywords
        }
    }
`

const ServicesPage = (props) => {
    const { data } = props
    const site = (data || {}).site

    return (
        <Layout>
            <SEO title={site.title} description={site.description} keywords={site.keywords} />
            <Container>
                <Services />
            </Container>
        </Layout>
    )
}

export default ServicesPage
