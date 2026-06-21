/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lnkflow.com'],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY || 'pk_test_51TkUafCJYjGZsMP6SJHtgCkpFotlYYMq5sRj3yFh7SIx7qCQ3ypVInwcemg3YCXQ94eYAurGmqZ9IObISNts0Eup00W7siRnB2',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://income-plan-git-main-lokman2.vercel.app',
  },
}

module.exports = nextConfig
