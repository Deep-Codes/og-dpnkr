import core from 'puppeteer-core';
import Chromium from 'chrome-aws-lambda';
import { getOptions } from './options';
import { readFileSync } from 'fs';

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString('base64');

let _page;

async function getPage(isDev) {
  if (_page) {
    return _page;
  }
  await Chromium.font(rglr);
  await Chromium.font(bold);
  await Chromium.font(mono);
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
