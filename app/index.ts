import type { App } from '@safidea_/engine'
import { sendConfirmationEmail } from './automations/sendConfirmationEmail'
import { createRequest } from './pages/createRequest'
import { createRequestSpecs } from './specs/createRequest.spec'
import { requests } from './tables/requests'
import { translations } from './translations'
/*import { login } from './pages/login'
import { loginSpecs } from './pages/login.spec'
import { listRequests } from './pages/listRequests'
import { listRequestsSpecs } from './pages/listRequests.spec'
import { updateRequest } from './pages/updateRequest'*/

export const app: App = {
  name: 'Safidea Requests',
  features: translations
    .map((t) => [
      {
        name: 'create-request',
        specs: createRequestSpecs(t),
        pages: [createRequest(t)],
        tables: [requests],
        automations: [sendConfirmationEmail],
      },
      /*{
      name: 'login',
      specs: loginSpecs,
      pages: [login],
    },
    {
      name: 'list-requests',
      specs: listRequestsSpecs,
      pages: [listRequests, updateRequest],
      tables: [requests],
    },*/
    ])
    .flat(),
  server: {
    port: '$PORT',
  },
  mailer: {
    host: '$MAILER_HOST',
    port: '$MAILER_PORT',
    user: '$MAILER_USER',
    pass: '$MAILER_PASS',
    from: '$MAILER_FROM',
  },
  database: {
    url: '$DATABASE_URL',
    type: '$DATABASE_TYPE',
  },
  /*auth: {
    redirectOnLogin: '/requests',
    redirectOnLogout: '/login',
    strategy: 'magic-link',
    confirmEmail: {
      subject: 'Confirm your email',
      text: 'Click on the link to confirm your email: {{{ link }}}.',
      html: 'Click on the link to confirm your email: <a href="{{{ link }}}">Confirm my email</a>.',
    },
    secret: 'my-secret',
  },
  blocks: [
    {
      ref: 'sidebar',
      component: 'Sidebar',
      title: {
        text: 'Request',
      },
      links: [
        {
          label: 'My requests',
          href: '/requests',
          prefixIcon: {
            type: 'RectangleStack',
          },
        },
      ],
    },
  ],*/
}
