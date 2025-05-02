import { queries } from "~/lib/queryManager"
import { Post } from "~/server/types/blog.type"


export default defineEventHandler(async (event) => {

    try {
        const config = useRuntimeConfig()
        const query = queries.postsSummary
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
