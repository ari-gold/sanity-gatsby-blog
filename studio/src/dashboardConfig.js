export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f40007905af3bd7a1e674e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-23982xkd',
                  apiId: '69191db4-2397-405a-9ae5-2cd04d552a1d'
                },
                {
                  buildHookId: '5f40007a05af3be2bde672fe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dt4zt1ie',
                  apiId: 'bd7850dc-0707-41a8-868c-5b0362b0a362'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ari-gold/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dt4zt1ie.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
