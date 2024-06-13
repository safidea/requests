import type { Page } from '@safidea_/engine/page'

export const createRequest: Page = {
  name: 'create-request',
  path: '/',
  head: {
    title: 'Safidea Requests - Get Started',
    metas: [
      {
        name: 'description',
        content: 'Get started with Safidea Requests',
      },
    ],
  },
  body: [
    {
      component: 'Header',
      title: {
        text: 'Safidea Requests',
      },
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Get Started',
          href: '/get-started',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
      buttons: [
        {
          label: 'Login',
          href: '/login',
        },
      ],
    },
    {
      component: 'Form',
      action: '/api/table/leads',
      method: 'POST',
      title: {
        text: 'Get Started',
      },
      paragraph: {
        text: 'Get started with Request',
      },
      inputs: [
        {
          name: 'email',
          label: 'Your email',
          placeholder: 'name@solumy.com',
          type: 'email',
          required: true,
        },
        {
          name: 'name',
          label: 'Your name',
          placeholder: 'John Doe',
          type: 'text',
          required: true,
        },
        {
          name: 'subject',
          label: 'Subject',
          placeholder: 'I would like to get started with Request.',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          label: 'Your message',
          placeholder: 'Hello, I would like to get started with Request.',
          type: 'text',
          required: true,
        },
      ],
      buttons: [
        {
          type: 'submit',
          label: 'Send message',
        },
      ],
      successMessage: 'Your message has been sent.',
    },
    {
      component: 'Footer',
      title: {
        text: 'Request',
      },
      paragraph: {
        text: 'Request is a tech company based in Paris, France.',
      },
      links: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Get Started',
          href: '/get-started',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
      copyright: '© 2021 Request',
    },
  ],
}
