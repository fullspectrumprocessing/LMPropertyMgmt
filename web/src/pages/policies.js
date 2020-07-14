import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Polices from '../components/policies'

export const query = graphql`
    query PoliciesPageQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
            title
            description
            keywords
        }
    }
`

const PoliciesPage = (props) => {
    const { data } = props
    const site = (data || {}).site

    return (
        <Layout>
            <SEO title={site.title} description={site.description} keywords={site.keywords} />

            <Polices />
        </Layout>
    )
}

export default PoliciesPage
