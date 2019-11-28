export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ddfb2a61738f68f6db9c3cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x21hwc6j',
                  apiId: '99445661-026a-421f-9fa4-ab1dede7eb27'
                },
                {
                  buildHookId: '5ddfb2a6dd6ef9d7991bd80e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x72bfqgj',
                  apiId: '3dcc3c2c-9f10-4bb7-892e-141cda2e4f6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qls0ulp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x72bfqgj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
