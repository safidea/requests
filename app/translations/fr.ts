import type { Translation } from '.'

export const fr: Translation = {
  path: '/fr',
  header: {
    aboutUsButton: 'À propos de nous',
  },
  createRequest: {
    title: 'Nouvelle requête',
    paragraph:
      'Partagez-nous votre demande sur un conseil, une nouvelle fonctionnalité, un nouvel outil ou un problème rencontré.',
    email: 'Votre email',
    emailPlaceholder: 'prenom.nom@email.com',
    name: 'Votre nom',
    namePlaceholder: 'Prénom Nom',
    subject: 'Sujet de votre demande',
    subjectPlaceholder: "J'aimerais être capable de...",
    details: 'Détails de votre demande',
    detailsPlaceholder: 'Mon objectif est de...\n\nActuellement, je rencontre...',
    send: 'Envoyer',
    successMessage: 'Votre requête a été envoyé.',
  },
}
