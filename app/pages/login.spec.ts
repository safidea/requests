import type { Spec } from '@safidea_/engine/spec'

export const loginSpecs: Spec[] = [
  {
    name: 'should display the login form',
    when: [
      {
        open: '/login',
      },
    ],
    then: [
      {
        text: 'Login',
        tag: 'h2',
      },
      {
        text: 'Email',
        tag: 'label',
      },
      {
        text: 'Send magic link',
        tag: 'button',
      },
    ],
  },
  {
    name: 'should submit the login form',
    when: [
      {
        open: '/login',
      },
      {
        fill: 'email',
        value: 'test@test.com',
      },
      {
        click: 'Send magic link',
      },
      {
        waitForText: 'Your email has been sent.',
      },
      {
        mailbox: 'test@test.com',
        find: [
          {
            field: 'subject',
            operator: 'is',
            value: 'Confirm your email',
          },
        ],
        click: 'Confirm my email',
      },
    ],
    then: [
      {
        url: '/requests',
      },
    ],
  },
]
