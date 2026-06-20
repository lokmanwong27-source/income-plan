// API Route: /api/webhook
// Handles Stripe webhook events for subscription management

import { db } from '../../lib/db'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  try {
    // Raw body is needed for Stripe signature verification
    const chunks = []
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    const rawBody = Buffer.concat(chunks)

    // Parse the event (signature verification will be added with actual Stripe key)
    const event = JSON.parse(rawBody.toString())

    // Handle event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        await db.createTransaction({
          userId: session.client_reference_id,
          amount: session.amount_total,
          currency: session.currency,
          status: 'completed',
          stripeSessionId: session.id,
        })
        // Upgrade user to Pro
        if (session.client_reference_id) {
          await db.updateUser(session.client_reference_id, { plan: 'pro' })
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        // Downgrade user to Free
        // Find user by stripeCustomerId and downgrade
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        // Notify user about failed payment
        break
      }
    }

    res.status(200).json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(400).json({ error: error.message })
  }
}
