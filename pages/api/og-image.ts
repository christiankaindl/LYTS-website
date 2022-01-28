// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getOgImage from 'utils/getOgImage';

// type Data = {
//   name: string
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  res.setHeader('Content-Type', `image/png`);
  res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
  const props = req.query
  res.end(
    // @ts-expect-error
    await getOgImage(props.title, props.description)
  );
}
