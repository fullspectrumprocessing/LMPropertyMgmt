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
                  buildHookId: '5e41d2a979e3b97ba44d20cb',
                  title: 'Sanity Studio',
                  name: 'LMPropertyMgmt-studio',
                  apiId: 'be1e5726-bcea-499e-a00b-a9891a2a609d'
                },
                {
                  buildHookId: '5e41d2a979e3b98f744d20bf',
                  title: 'Blog Website',
                  name: 'LMPropertyMgmt',
                  apiId: '6355045d-1916-425c-8901-fabe21e4a29f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fullspectrumprocessing/LMPropertyMgmt',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://LMPropertyMgmt.netlify.com', category: 'apps' }
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
