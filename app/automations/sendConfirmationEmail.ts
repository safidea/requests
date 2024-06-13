import type { Automation } from '@safidea_/engine/automation'

export const sendConfirmationEmail: Automation = {
  name: 'send-confirmation-email',
  trigger: {
    event: 'RecordCreated',
    table: 'requests',
  },
  actions: [
    {
      name: 'send-confirmation-email',
      action: 'SendEmail',
      from: 'noreply@safidea.com',
      to: '{{ trigger.email }}',
      subject: 'Thank you for your interest in Request',
      text: 'Thank you for your interest in Request. We will get back to you as soon as possible.',
      html: 'Thank you for your interest in Request. We will get back to you as soon as possible.',
    },
  ],
}
