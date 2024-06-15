import type { Page } from '@safidea_/engine/page'
import type { Translation } from '../translations'

export const createRequest = (t: Translation): Page => ({
  name: 'create-request',
  path: t.path + '/',
  head: {
    title: 'Requests by Safidea',
    metas: [
      {
        name: 'description',
        content: 'Requests by Safidea',
      },
    ],
  },
  body: [
    {
      component: 'Header',
      title: {
        text: 'Requests by Safidea',
      },
      links: [],
      buttons: [
        {
          label: t.header.aboutUsButton,
          href: 'https://safidea.com',
        },
      ],
    },
    {
      component: 'Form',
      action: '/api/table/requests',
      method: 'POST',
      title: {
        text: t.createRequest.title,
      },
      paragraph: {
        text: t.createRequest.paragraph,
      },
      inputs: [
        {
          name: 'email',
          label: t.createRequest.email,
          placeholder: t.createRequest.emailPlaceholder,
          type: 'email',
          required: true,
        },
        {
          name: 'name',
          label: t.createRequest.name,
          placeholder: t.createRequest.namePlaceholder,
          type: 'text',
          required: true,
        },
        {
          name: 'subject',
          label: t.createRequest.subject,
          placeholder: t.createRequest.subjectPlaceholder,
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          label: t.createRequest.details,
          placeholder: t.createRequest.detailsPlaceholder,
          type: 'textarea',
        },
      ],
      buttons: [
        {
          type: 'submit',
          label: t.createRequest.send,
        },
      ],
      successMessage: t.createRequest.successMessage,
    },
  ],
})
