// API Route: /api/checkout — Stripe Checkout Session

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { priceId, userId } = req.body
    if (!priceId || !userId) {
      return res.status(400).json({ error: 'priceId and userId required' })
    }

    // In production, this creates a real Stripe Checkout Session
    // For now, simulate a successful response
    const session = {
      id: `cs_test_${Date.now()}`,
      url: '/dashboard?checkout=success',
      amount_total: priceId === 'price_pro' ? 900 : 2900,
      currency: 'usd',
    }

    res.status(200).json({ session })
  } catch (error) {
    console.error('Checkout error:', error)
    res.status(500).json({ error: error.message })
  }
}
