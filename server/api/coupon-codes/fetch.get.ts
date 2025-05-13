import { queries } from "~/lib/queryManager"
import type { Coupon } from "~/server/types/coupon.type"
import { sendServerResponse } from 'nexus-req'


export default defineEventHandler(async (event) => {

    try {
        const query = queries.couponCodes
        const sanity = useSanity()
        const resp: Coupon[] = await sanity.fetch(query)
        setResponseStatus(event, 200)
        return sendServerResponse(200, 'sucess', resp)
    } catch (error) {
        if (error instanceof Error) {
            setResponseStatus(event, 500, error.message.includes('fetch') || error.message.includes('getaddrinfo') ? 'Fetch failed' : error.message)
            return sendServerResponse(500, error.message.includes('fetch') || error.message.includes('getaddrinfo') ? 'Fetch failed' : error.message)
        }
    }
})
