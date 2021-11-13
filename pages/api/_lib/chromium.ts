import core from 'puppeteer-core';
import Chromium from 'chrome-aws-lambda';
import { getOptions } from './options';

let _page;

async function getPage(isDev) {
  if (_page) {
    return _page;
  }
  await Chromium.font('../_fonts/Inter-Regular.woff2');
  await Chromium.font('../_fonts/Inter-Bold.woff2');
  await Chromium.font('../_fonts/Vera-Mono.woff2');
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

export async function getScreenshot(url, type, isDev) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 2048, height: 1024, deviceScaleFactor: 2 });
  await page.goto(url, {
    waitUntil: 'networkidle0',
  });
  const element = await page.$('#preview');
  return await element.screenshot({ type });
}
