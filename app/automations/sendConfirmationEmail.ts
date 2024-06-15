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
    {
      name: 'send-confirmation-email',
      action: 'SendEmail',
      from: 'noreply@safidea.com',
      to: '$MAILER_TO',
      subject: '{{ trigger.name }} : {{ trigger.subject }}',
      text: '{{ trigger.email }}\n\n{{ trigger.message }}',
      html: '{{ trigger.email }}\n\n{{ trigger.message }}',
    },
  ],
}
