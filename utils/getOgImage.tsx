import { launchChromium } from 'playwright-aws-lambda'
import OgImage from '@/components/OgImage/OgImage'
import { renderToStaticMarkup } from 'react-dom/server'

async function getOgImage(title: string, description?: string) {

  // if (process.env.NODE_ENV === 'development') {
  //   return 'og image will be generated in production';
  // }

  const browser = await launchChromium({ headless: true })

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 })

  // Render the OG image component
  page.setContent(
    renderToStaticMarkup(<OgImage title={title} description={description} />)
  )

  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return buffer
}

export default getOgImage;
