// Video Service — Order API
// Handles order creation and video generation pipeline

const PLANS = {
  basic: { price: 900, name: 'Basic', deliveryHours: 24 },
  pro: { price: 2900, name: 'Pro', deliveryHours: 12 },
  premium: { price: 7900, name: 'Premium', deliveryHours: 6 },
}

async function generateVideo(order) {
  // This function will be fully automated by Codex
  // 1. Parse the script/scenario
  // 2. Create HyperFrames composition
  // 3. Add animations and effects based on style
  // 4. Render the video
  // 5. Upload to cloud storage
  // 6. Update order status with download URL

  console.log(`🎬 Generating video for order ${order.id}`)
  console.log(`   Plan: ${order.plan}`)
  console.log(`   Script: ${order.script.substring(0, 100)}...`)

  // Return a mock result — actual generation will happen via Codex automation
  return {
    status: 'generating',
    estimatedDelivery: new Date(Date.now() + order.deliveryHours * 3600000).toISOString(),
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { plan, script, style, email, name } = req.body

    if (!plan || !script || !email) {
      return res.status(400).json({ error: 'plan, script, and email are required' })
    }

    const planConfig = PLANS[plan]
    if (!planConfig) {
      return res.status(400).json({ error: `Invalid plan: ${plan}` })
    }

    // Create order
    const order = {
      id: `VID-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`.toUpperCase(),
      plan: planConfig.name,
      price: planConfig.price,
      script,
      style: style || 'modern',
      email,
      name: name || 'Customer',
      deliveryHours: planConfig.deliveryHours,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    // Trigger video generation (async)
    const generation = await generateVideo(order)

    res.status(201).json({
      order,
      generation,
      message: `Your video is being created! Estimated delivery: within ${planConfig.deliveryHours} hours.`,
    })
  } catch (error) {
    console.error('Order creation failed:', error)
    res.status(500).json({ error: 'Failed to create order' })
  }
}

// For external use — will be called by Stripe webhook
export async function processOrder(orderId) {
  console.log(`Processing order: ${orderId}`)
  // Full automation logic goes here
}
