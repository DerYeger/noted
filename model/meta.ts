export interface OGMetaTag {
  hid: string
  property: string
  content: string
}

export interface TwitterMetaTag {
  hid: string
  name: string
  content: string
}

export function generateSocialTags(
  title: string,
  description: string
): (OGMetaTag | TwitterMetaTag)[] {
  const formattedTitle = `Noted | ${title}`
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: formattedTitle,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: formattedTitle,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: formattedTitle,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: formattedTitle,
    },
  ]
}
