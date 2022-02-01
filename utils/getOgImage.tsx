import { launchChromium } from 'playwright-aws-lambda'
import { domain } from 'utils';

async function getOgImage(title: string, description?: string, home?: string) {
  const browser = await launchChromium({ headless: true })

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 })

  await page.goto(`${domain}/og-images?title=${encodeURIComponent(title)}${description ? `&description=${encodeURIComponent(description)}` : ''}${home ? `&home=${encodeURIComponent(home)}` : ''}`, {
    waitUntil: 'networkidle'
  })
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return buffer
}

export default getOgImage;
