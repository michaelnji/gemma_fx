

export default defineEventHandler(async (event) => {

    try {
        const config = useRuntimeConfig()
        const id = getRouterParam(event, 'id')
        if (id) {

        }

        setResponseStatus(event, 404, 'Article not found')
        return sendServerResponse(404, 'Article not found')
    } catch (error) {
        if (error instanceof Error) {
            setResponseStatus(event, 500, error.message.includes('fetch failed') ? 'Fetch failed' : error.message)
            return sendServerResponse(500, error.message.includes('fetch failed') ? 'Fetch failed' : error.message)
        }
    }
})
