import type { Spec } from '@safidea_/engine/spec'

export const createRequestSpecs: Spec[] = [
  {
    name: 'should display the page title',
    when: [
      {
        open: '/',
      },
    ],
    then: [
      {
        title: 'Safidea Requests',
      },
    ],
  },
  {
    name: 'should display the form',
    when: [
      {
        open: '/',
      },
    ],
    then: [
      {
        text: 'Get Started',
        tag: 'h2',
      },
      {
        text: 'Get started with Request',
        tag: 'p',
      },
      {
        text: 'Send message',
        tag: 'button',
      },
    ],
  },
  {
    name: 'should submit the form',
    when: [
      {
        open: '/get-started',
      },
      {
        fill: 'email',
        value: 'test@test.com',
      },
      {
        fill: 'name',
        value: 'John Doe',
      },
      {
        fill: 'subject',
        value: 'I would like to get started with Request.',
      },
      {
        fill: 'message',
        value: 'Hello, I would like to get started with Request.',
      },
      {
        click: 'Send message',
      },
      {
        waitForText: 'Your message has been sent.',
      },
      {
        waitForAutomation: 'send-confirmation-email',
      },
    ],
    then: [
      {
        text: 'Your message has been sent.',
        tag: 'p',
      },
      {
        table: 'leads',
        find: [
          {
            field: 'email',
            operator: 'is',
            value: 'test@test.com',
          },
        ],
      },
      {
        mailbox: 'test@test.com',
        find: [
          {
            field: 'subject',
            operator: 'is',
            value: 'Thank you for your interest in Request',
          },
        ],
      },
    ],
  },
]
