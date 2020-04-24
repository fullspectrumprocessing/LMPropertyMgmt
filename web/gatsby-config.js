// Load variables from `.env` as soon as possible
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                    family: `Nunito Sans`,
                    variants: [`400`, `600`, `800`],
                  },
                  {
                    family: `Montserrat`,
                    variants: [`300`, `400`, `400`, `500`, `600`],
                  },
                  {
                    family: `Cabin`,
                    variants: [`400`, `600`, `800`],
                  },
                  {
                    family: `Questrial`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Archivo`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Prata`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Ramabhadra`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Forum`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Reem Kufi`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Heebo`,
                    variants: [`400`, `700`],
                  },
                  {
                    family: `Inter`,
                    variants: [`400`, `700`],
                  },
                
              ],
            },
          },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-143934204-10',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: 'UA-143934204-10',
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
       
    
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: 'src/images/logoMini.png',
            },
        },
        `gatsby-plugin-offline`,
    ],
}
