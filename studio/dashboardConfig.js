export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d4c2828ef95d1cdf70575b9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-utaie6a6',
                  apiId: '10a4961c-7b21-4b12-8197-87be40280d8f'
                },
                {
                  buildHookId: '5d4c2828829fe46403bbda52',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q27qjv2z',
                  apiId: '2eec6fc8-7677-4fac-825f-3e9b45d04046'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertmader/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q27qjv2z.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
