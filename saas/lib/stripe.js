// lib/stripe.js — Stripe integration helpers
import { loadStripe } from '@stripe/stripe-js'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig() || {}
const STRIPE_KEY = publicRuntimeConfig?.NEXT_PUBLIC_STRIPE_KEY || process.env.NEXT_PUBLIC_STRIPE_KEY

let stripePromise
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_KEY)
  }
  return stripePromise
}

export const PRICING = {
  free: { id: 'free', name: 'Free', price: 0, links: 5 },
  pro: { id: 'pro', name: 'Pro', price: 900, links: -1 },       // $9/mo
  business: { id: 'business', name: 'Business', price: 2900, links: -1 }, // $29/mo
}

export async function createCheckoutSession(priceId, userId) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, userId }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Checkout failed')
  return data
}

export const SUBSCRIPTION_TIERS = [
  {
    id: 'pro',
    name: 'Pro',
    price: '$9',
    priceId: 'price_pro',
    features: ['Unlimited links', 'Advanced analytics', 'All themes + custom',
      'Custom domain support', 'Priority support', 'CSV export'],
  },
  {
    id: 'business',
    name: 'Business',
    price: '$29',
    priceId: 'price_business',
    features: ['Everything in Pro', 'Team collaboration', 'White-label domains',
      'API access', 'Custom integrations', 'Dedicated support'],
  },
]
