import type { Table } from '@safidea_/engine/table'

export const requests: Table = {
  name: 'requests',
  fields: [
    {
      name: 'name',
      type: 'SingleLineText',
    },
    {
      name: 'email',
      type: 'Email',
    },
    {
      name: 'subject',
      type: 'SingleLineText',
    },
    {
      name: 'message',
      type: 'LongText',
    },
  ],
}
