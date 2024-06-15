import type { Spec } from '@safidea_/engine/spec'
import type { Translation } from '../translations'

export const createRequestSpecs = (t: Translation): Spec[] => [
  {
    name: 'should display the page title',
    when: [
      {
        open: t.path + '/',
      },
    ],
    then: [
      {
        title: 'Requests by Safidea',
      },
    ],
  },
  {
    name: 'should display the form',
    when: [
      {
        open: t.path + '/',
      },
    ],
    then: [
      {
        text: t.createRequest.title,
        tag: 'h4',
      },
      {
        text: t.createRequest.paragraph,
        tag: 'p',
      },
      {
        text: t.createRequest.send,
        tag: 'button',
      },
    ],
  },
  {
    name: 'should submit the form',
    when: [
      {
        open: t.path + '/',
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
        click: t.createRequest.send,
      },
      {
        waitForText: t.createRequest.successMessage,
      },
      {
        waitForAutomation: 'send-confirmation-email',
      },
    ],
    then: [
      {
        text: t.createRequest.successMessage,
        tag: 'p',
      },
      {
        table: 'requests',
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
