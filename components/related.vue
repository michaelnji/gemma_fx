    <script lang="ts" setup>
    import type { Post } from '~/server/types/blog.type';
    import type { ServerResponse, StatusCode } from '~/server/types/index.types';
    const props = defineProps<{
        slug: string,
        tags: { title: string }[]
    }>()
    const isLoading = ref(true)
    const posts = ref<Post[] | undefined>()

    const processedPosts = computed(() => {
        const data = posts.value
        if (data) {
            return data.filter((x) => x.slug.current !== props.slug).filter((x) => {
                return x.tags.some((tag) => props.tags.some((propTag) => tag.title === propTag.title))
            }).filter((x, y) => y < 2)
        }
        return null
    })

    const nextPost = computed(() => {
        const data = posts.value
        if (data) {
            let currentPostIndex = data.findIndex(post => post.slug.current === props.slug) ?? -1
            currentPostIndex = currentPostIndex === data.length - 1 ? -1 : currentPostIndex
            return data[currentPostIndex + 1]
        }
        return null
    })
    onMounted(async () => {
        try {
            const resp = await $fetch<ServerResponse<StatusCode, Post[]>>('/api/articles/fetch')
            if (resp.ok && resp.data) {
                posts.value = resp.data
                isLoading.value = false
            }
        } catch (error) {
            throw createError(error as Error)
        }
    })
</script>
<template>
    <div class="mt-12">
        <div v-if="isLoading" class="w-full  h-48 skeleton bg-base-300 lg:bg-base-200"></div>
        <div class="" v-if="!isLoading && processedPosts && processedPosts.length > 0">
            <h2 class="text-2xl ">You might also like</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-1 gap-4 mt-6">
                <NuxtLink v-for="post in processedPosts" :to="post.slug.current"
                    :aria-label="`Read article: ${post.title}`">
                    <div class=" pl-3 border-l-2 border-primary">

                        <div class="">
                            <span class="mb-1 badge  font-mono font-bold badge-secondary">
                                {{ post.category.title }}
                            </span>
                            <h2 class="  text-2xl font-display">{{ post.title }}</h2>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="" v-if="!isLoading && processedPosts && processedPosts.length <= 0 && nextPost">
            <h2 class=" text-2xl ">Next article</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-1   gap-4 mt-6">
                <NuxtLink :aria-label="`Read next article: ${nextPost.title}`"
                    :to="`/articles/${nextPost.slug.current}`">
                    <div class=" pl-3 border-l-2 border-primary">

                        <div class="">
                            <span class="mb-1 badge  font-mono font-bold badge-secondary">
                                {{ nextPost.category.title }}
                            </span>
                            <h2 class="  text-2xl font-display">{{ nextPost.title }}</h2>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
