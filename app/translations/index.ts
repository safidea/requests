import { en } from './en'
import { fr } from './fr'

export const translations = [en, fr]

export type Translation = {
  path: string
  header: {
    aboutUsButton: string
  }
  createRequest: {
    title: string
    paragraph: string
    email: string
    emailPlaceholder: string
    name: string
    namePlaceholder: string
    subject: string
    subjectPlaceholder: string
    details: string
    detailsPlaceholder: string
    send: string
    successMessage: string
  }
}
