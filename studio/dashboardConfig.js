export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f330c65f92d9e783ee8d585',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8g18zakc',
                  apiId: 'b24914a9-65dc-4467-a892-c5b55813fde1'
                },
                {
                  buildHookId: '5f330c6610abe46ba999edc7',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ty61rime',
                  apiId: '58323b6c-f1ad-4c8f-9af0-49828874d7a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slinn0/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ty61rime.netlify.app', category: 'apps'}
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
