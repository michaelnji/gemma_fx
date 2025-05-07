    <script lang="ts" setup>
    import type { Post } from '~/server/types/blog.type';
    import type { ServerResponse, StatusCode } from '~/server/types/index.types';
    const props = defineProps<{
        slug: string,
        tags: { title: string }[]
    }>()
    const isLoading = ref(true)
    const posts = ref<Post[] | undefined>()

    const proccessedPosts = computed(() => {
        const data = posts.value
        if (data) {
            return data.filter((x) => x.slug.current !== props.slug).filter((x) => {
                let hasSimilar = false
                x.tags.forEach((y) => {
                    if (props.tags.find((tag) => y.title === tag.title)) { hasSimilar = true }
                })
                return hasSimilar
            }).filter((x, y) => y < 2)
        }
        return null
    })

    const nextPost = computed(() => {
        const data = posts.value
        if (data) {
            const currentPostIndex = data.findIndex(post => post.slug.current === props.slug) ?? -1
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
        <div class="" v-if="!isLoading && proccessedPosts && proccessedPosts.length > 0">
            <h2 class="font-diaplay text-3xl font-bold">You might also like</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  gap-4 mt-6">
                <NuxtLink v-for="post in proccessedPosts" :to="post.slug.current">
                    <div class=" pl-3 border-l-2 border-primary">

                        <div class="">
                            <span class="mb-1 badge badge-sm font-mono font-bold badge-secondary">
                                {{ post.category.title }}
                            </span>
                            <h2 class="  text-xl">{{ post.title }}</h2>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="" v-if="!isLoading && proccessedPosts && proccessedPosts.length <= 0 && nextPost">
            <h2 class="font-diaplay text-3xl font-bold">Next article</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  gap-4 mt-6">
                <NuxtLink :to="`/articles/${nextPost.slug.current}`">
                    <div class=" pl-3 border-l-2 border-primary">

                        <div class="">
                            <span class="mb-1 badge badge-sm font-mono font-bold badge-secondary">
                                {{ nextPost.category.title }}
                            </span>
                            <h2 class="  text-xl">{{ nextPost.title }}</h2>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
