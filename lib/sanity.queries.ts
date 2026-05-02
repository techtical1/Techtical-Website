import { client } from '@/lib/sanity.client'

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string
  params?: Record<string, any>
  revalidate?: number
  tags?: string[]
}) {
  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate,
        tags,
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}
