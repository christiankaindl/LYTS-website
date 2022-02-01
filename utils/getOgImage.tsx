import { domain } from 'utils';
import core from 'puppeteer-core';
import { getOptions } from './options';

let _page: core.Page | null;
const isDev = !process.env.AWS_REGION;

async function getOgImage(title: string, description?: string, home?: string) {
  if (!_page) {
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
  }

  const page = _page;
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(`${domain}/og-images?title=${encodeURIComponent(title)}${description ? `&description=${encodeURIComponent(description)}` : ''}${home ? `&home=${encodeURIComponent(home)}` : ''}`, {
    waitUntil: 'networkidle0'
  })
  return await page.screenshot({ type: 'png' });
}

export default getOgImage;
