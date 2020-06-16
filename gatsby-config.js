module.exports =  {
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/content',
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/authors',
                name: 'authors'
            }
        },            
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 540
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
            }
        },
        'gatsby-plugin-netlify-cms'
    ]
}