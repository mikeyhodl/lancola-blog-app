export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62740e82fa9d5315cf05262f',
                  title: 'Sanity Studio',
                  name: 'lancola-blog-app-studio',
                  apiId: '8ca48f37-de11-446b-abd6-f12c6af474cf'
                },
                {
                  buildHookId: '62740e83dce12308f19bb12a',
                  title: 'Landing pages Website',
                  name: 'lancola-blog-app',
                  apiId: '63006e85-5162-42ec-b3b1-daca1791d9d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikeyhodl/lancola-blog-app',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://lancola-blog-app.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
