export function createMockStore(): Insomnia.StoreContext {
  const items = new Map()

  return {
    hasItem: async (key: string) => items.has(key),
    setItem: async (key: string, value: string) => {
      items.set(key, value)
    },
    getItem: async (key: string) => items.get(key),
    removeItem: async (key: string) => {
      items.delete(key)
    },
    clear: async () => items.clear(),
    all: async () =>
      Array.from(items).map(([key, value]) => ({
        key,
        value,
      })),
  }
}
