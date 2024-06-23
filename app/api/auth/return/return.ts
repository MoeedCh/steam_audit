// pages/api/auth/steam/return.ts
import { NextApiRequest, NextApiResponse } from 'next';
import passport from '../../../../lib/passport';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('steam', (err: any, user: { steamId: string }) => {
    if (err) {
      return res.status(500).json({ error: 'Authentication failed' });
    }
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    // Set a session cookie with the steamId
    res.setHeader('Set-Cookie', `steamId=${user.steamId}; Path=/; HttpOnly`);
    res.redirect('/'); // Redirect to your desired page after login
  })(req, res);
}