import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { getScreenshot } from './_lib/chromium';

const IS_DEV = !process.env.AWS_REGION;
const IS_HTML_DEBUG = process.env.OG_HTML_DEBUG === '1';

// http://localhost:3000/images?title=Using%20CSS%20variables%20with%20TailwindCSS&top=October%205%20,%202021%20-%203min%20read

const HOST = 'https://og.dpnkr.in';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    console.log('HTTP ' + req.url);
    const url = parse(req.url || '/', true);
    // @ts-ignore
    const queryString = new URLSearchParams(url.query).toString();
    const fileType = url.query.fileType || 'png';
    const file = await getScreenshot(
      `${HOST}/images?${queryString}`,
      fileType,
      IS_DEV
    );
    res.statusCode = 200;
    res.setHeader('Content-Type', `image/${fileType}`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    console.error(e);
  }
}
