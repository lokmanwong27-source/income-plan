// API Route: /api/analytics
// Handles click tracking and analytics

import { db } from '../../lib/db'

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      // Track a click
      try {
        const { linkId, referrer, userAgent, country } = req.body
        if (!linkId) return res.status(400).json({ error: 'linkId required' })

        const click = await db.trackClick(linkId, {
          referrer: referrer || req.headers.referer || 'direct',
          userAgent: userAgent || req.headers['user-agent'] || 'unknown',
          country: country || 'unknown',
          ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        })

        // Redirect to the actual URL
        const link = await db.getLink(linkId)
        if (link && link.url) {
          res.status(200).json({ click, redirect: link.url })
        } else {
          res.status(200).json({ click })
        }
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    case 'GET':
      try {
        const { userId, linkId } = req.query

        if (linkId) {
          const analytics = await db.getAnalytics(linkId)
          return res.status(200).json({ analytics })
        }

        if (userId) {
          const allAnalytics = await db.getAllAnalytics(userId)
          return res.status(200).json({ analytics: allAnalytics })
        }

        res.status(400).json({ error: 'userId or linkId required' })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
