import type { Spec } from '@safidea_/engine/spec'

export const listRequestsSpecs: Spec[] = [
  {
    name: 'should display the requests',
    when: [
      {
        open: '/requests',
      },
    ],
    then: [
      {
        text: 'Request',
      },
    ],
  },
]
