import { getCareers } from 'lib/cms'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  if (process.env.NODE_ENV === 'production') res.setHeader('Cache-Control', `public,max-age=${60 * 60},immutable`)

  res.json(await getCareers())
}