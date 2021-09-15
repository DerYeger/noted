import { Context } from '@nuxt/types'

export default async function (_: Context) {
  const workbox = await window.$workbox

  if (!workbox) {
    // eslint-disable-next-line no-console
    console.debug("Workbox couldn't be loaded.")
    return
  }

  workbox.addEventListener('installed', (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event.isUpdate)

    if (event.isUpdate === true) {
      // eslint-disable-next-line no-console
      console.debug('There is an update for the PWA, reloading...')
      window.location.reload()
      return
    }

    // eslint-disable-next-line no-console
    console.debug('The PWA is on the latest version.')
  })
}
