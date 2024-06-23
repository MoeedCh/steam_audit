// pages/api/auth/steam.ts
import { NextApiRequest, NextApiResponse } from 'next';
import passport from '../../../lib/passport';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('steam')(req, res);
}