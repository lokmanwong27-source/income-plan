// API Route: /api/links
// Handles CRUD operations for user links

import { db } from '../../lib/db'

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const { userId } = req.query
        if (!userId) return res.status(400).json({ error: 'userId required' })
        const links = await db.getLinks(userId)
        res.status(200).json({ links })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    case 'POST':
      try {
        const { userId, title, url, icon } = req.body
        if (!userId || !title || !url) {
          return res.status(400).json({ error: 'userId, title, and url required' })
        }
        const link = await db.createLink(userId, { title, url, icon: icon || '🔗' })
        res.status(201).json({ link })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    case 'PUT':
      try {
        const { id, title, url, icon, active } = req.body
        if (!id) return res.status(400).json({ error: 'id required' })
        const link = await db.updateLink(id, { title, url, icon, active })
        if (!link) return res.status(404).json({ error: 'Link not found' })
        res.status(200).json({ link })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    case 'DELETE':
      try {
        const { id } = req.query
        if (!id) return res.status(400).json({ error: 'id required' })
        const result = await db.deleteLink(id)
        res.status(200).json({ deleted: result })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
