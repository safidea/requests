import type { Page } from '@safidea_/engine/page'

export const updateRequest: Page = {
  name: 'request',
  path: '/requests/:id',
  head: {
    title: 'Request',
  },
  body: [
    {
      blockRef: 'sidebar',
      component: 'Sidebar',
      children: [
        {
          component: 'Form',
          action: '/api/table/requests/{{ params.id }}',
          method: 'PATCH',
          source: '/api/table/requests/{{ params.id }}',
          title: {
            text: 'Update request',
          },
          inputs: [
            {
              name: 'subject',
              label: 'Subject',
              type: 'text',
              required: true,
              placeholder: 'My request',
            },
          ],
          buttons: [
            {
              type: 'submit',
              variant: 'secondary',
              label: 'Delete Request',
              action: '/api/table/requests/{{ params.id }}',
              method: 'DELETE',
              onSuccess: {
                redirect: '/requests',
              },
            },
            {
              type: 'submit',
              label: 'Update request',
              onSuccess: {
                notification: {
                  message: 'Request updated',
                  type: 'success',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
