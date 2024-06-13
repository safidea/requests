import type { Page } from '@safidea_/engine/page'

export const listRequests: Page = {
  name: 'requests',
  path: '/requests',
  head: {
    title: 'Requests',
  },
  body: [
    {
      blockRef: 'sidebar',
      component: 'Sidebar',
      children: [
        {
          component: 'Heading',
          title: {
            text: 'Requests',
          },
          buttons: [
            {
              label: 'New request',
              href: '/requests/add',
            },
          ],
        },
        {
          component: 'List',
          source: '/api/table/requests',
          columns: [
            {
              name: 'subject',
            },
          ],
          open: '/requests/{{ row.id }}',
        },
      ],
    },
  ],
}
