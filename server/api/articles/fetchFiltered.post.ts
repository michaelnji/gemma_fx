import { buildPostSummarizedQuery, queries } from "~/lib/queryManager"
import type { Post } from "~/server/types/blog.type"


export default defineEventHandler(async (event) => {

    try {
        const config = useRuntimeConfig()
        const body = await readBody<{ post_type: string, category: string }>(event)
        const query = buildPostSummarizedQuery(body.post_type, body.category)

        const sanity = useSanity()
        const resp: Post[] = await sanity.fetch(query)

        setResponseStatus(event, 200)
        return sendServerResponse(200, 'sucess', resp)
    } catch (error) {
        if (error instanceof Error) {
            setResponseStatus(event, 500, error.message.includes('fetch failed') ? 'Fetch failed' : error.message)
            return sendServerResponse(500, error.message.includes('fetch failed') ? 'Fetch failed' : error.message)
        }
    }
})
