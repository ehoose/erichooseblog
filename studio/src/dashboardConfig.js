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
                  buildHookId: '5eb6ce5c9b13497b6429237b',
                  title: 'Sanity Studio',
                  name: 'erichooseblog-studio',
                  apiId: '5dc5c4bd-9dba-498d-81c4-ac7f332c060f'
                },
                {
                  buildHookId: '5eb6ce5cc2f2d248be28713f',
                  title: 'Blog Website',
                  name: 'erichooseblog',
                  apiId: '0560acef-75a0-4940-a12a-b1a31535b0e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ehoose/erichooseblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://erichooseblog.netlify.app', category: 'apps' }
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
