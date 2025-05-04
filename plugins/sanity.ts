import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
    const sanity = useSanity()
    const builder = imageUrlBuilder(sanity.client)

    return {
        provide: {
            urlFor: (source: any) => builder.image(source)
        }
    }
})
