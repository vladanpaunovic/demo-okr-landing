// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setPreviewData({});

  const slug = req.query.slug;

  if (!slug) {
    return res.status(404).end();
  }

  res.redirect(`/what-we-think/${slug}`);
}
