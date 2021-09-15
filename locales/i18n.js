import de from './de'
import en from './en'

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
  de: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
}

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { de, en },
  dateTimeFormats,
}
