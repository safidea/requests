import type { Page } from '@safidea_/engine/page'

export const login: Page = {
  name: 'login',
  path: '/login',
  head: {
    title: 'Login',
  },
  body: [
    {
      component: 'Form',
      action: '/api/auth/login',
      title: {
        text: 'Login',
        align: 'center',
      },
      paragraph: {
        text: 'Get your magic link to login.',
        align: 'center',
      },
      inputs: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'My email',
        },
      ],
      buttons: [
        {
          type: 'submit',
          label: 'Send magic link',
        },
      ],
      successMessage: 'Your email has been sent.',
    },
  ],
}
