import { buildPostBySlugQuery } from "~/lib/queryManager"
import type { Post } from "~/server/types/blog.type"
import { sendServerResponse } from 'nexus-req'


export default defineEventHandler(async (event) => {

    try {
        const config = useRuntimeConfig()
        const slug = getRouterParam(event, 'slug')
        if (slug) {
            const query = buildPostBySlugQuery(slug)
            const sanity = useSanity()
            const resp: Post = await sanity.fetch(query)
            setResponseStatus(event, 200)
            return sendServerResponse(200, 'sucess', resp)
        }

        setResponseStatus(event, 404, 'Article not found')
        return sendServerResponse(404, 'Article not found')
    } catch (error) {
        if (error instanceof Error) {
            setResponseStatus(event, 500, error.message.includes('fetch') || error.message.includes('getaddrinfo') ? 'Fetch failed' : error.message)
            return sendServerResponse(500, error.message.includes('fetch') || error.message.includes('getaddrinfo') ? 'Fetch failed' : error.message)
        }
    }
})
