import { defineOgImage, useRouter } from '#imports'
import type { OgImagePageScreenshotOptions } from '../../types'

export function defineOgImageScreenshot(options: OgImagePageScreenshotOptions = {}) {
  const router = useRouter()
  const route = router.currentRoute.value?.path || '/'
  return defineOgImage({
    alt: `Web page screenshot${route ? ` of ${route}` : ''}.`,
    renderer: 'chromium',
    extension: 'jpeg',
    component: 'PageScreenshot', // this is an alias
    ...options,
  })
}
