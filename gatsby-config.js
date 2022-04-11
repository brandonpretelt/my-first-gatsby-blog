module.exports = {
    siteMetadata: {
        title: `ramblings of an aspiring dev`
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`
            }
        }
    ]
};
