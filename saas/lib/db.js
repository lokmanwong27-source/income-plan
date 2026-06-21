// lib/db.js - 記憶體資料庫 (memory store for dev, swap for production)

const store = global.__db || (global.__db = {
  users: {},
  links: {},
  clicks: {},
  transactions: {},
  counters: { users: 0, links: 0, clicks: 0, transactions: 0 }
})

const db = {
  // === Links ===
  getLinks: async (userId) =>
    Object.values(store.links).filter(l => l.userId === userId),

  createLink: async (userId, data) => {
    const id = `link_${++store.counters.links}`
    const link = {
      id, userId, ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      clicks: 0, orders: 0
    }
    store.links[id] = link
    return link
  },

  updateLink: async (id, data) => {
    if (!store.links[id]) return null
    Object.assign(store.links[id], data, { updatedAt: new Date().toISOString() })
    return store.links[id]
  },

  deleteLink: async (id) => {
    if (!store.links[id]) return false
    delete store.links[id]
    return true
  },

  getLink: async (linkId) => store.links[linkId] || null,

  // === Analytics ===
  trackClick: async (linkId, data) => {
    const id = `click_${++store.counters.clicks}`
    const click = { id, linkId, ...data, timestamp: new Date().toISOString() }
    store.clicks[id] = click
    if (store.links[linkId]) store.links[linkId].clicks++
    return click
  },

  getAnalytics: async (linkId) =>
    Object.values(store.clicks).filter(c => c.linkId === linkId),

  getAllAnalytics: async (userId) => {
    const ids = Object.values(store.links).filter(l => l.userId === userId).map(l => l.id)
    return Object.values(store.clicks).filter(c => ids.includes(c.linkId))
  },

  // === Transactions / Users ===
  createTransaction: async (data) => {
    const id = `txn_${++store.counters.transactions}`
    const txn = { id, ...data, createdAt: new Date().toISOString() }
    store.transactions[id] = txn
    return txn
  },

  updateUser: async (userId, data) => {
    if (!store.users[userId]) {
      store.users[userId] = { id: userId, ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    } else {
      Object.assign(store.users[userId], data, { updatedAt: new Date().toISOString() })
    }
    return store.users[userId]
  }
}

export { db }
