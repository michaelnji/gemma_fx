<script lang="ts" setup>
import type { Post } from '~/server/types/blog.type';
// import type { ServerResponse, StatusCode } from '~/server/types/index.types';
import type { StatusCodes, ServerResponse } from 'nexus-req'

const props = defineProps<{
    showMoreButton?: boolean,
    post_type: "Article", // TODO: replace with enum
    amount: number | 'all',
    linkToMore?: string,
    category: string // TODO: replace with enum
}>();
const posts = ref<Post[]>()
const isLoading = ref(true)
onMounted(async () => {
    try {
        isLoading.value = true
        const filters = {
            post_type: props.post_type,
            category: props.category
        }
        const resp = await $fetch<ServerResponse<StatusCodes, Post[]>>('/api/articles/fetchFiltered', {
            method: "POST",
            body: filters
        })
        if (resp.ok && resp.data) {
            posts.value = resp.data
            isLoading.value = false
        }

    } catch (error) {
        isLoading.value = false
        throw createError(error as Error)
    }
})
</script>
<template>
    <div class=" transition-all">


        <div v-if="posts && posts.length >= 1 && !isLoading"
            class=" pl-3 z-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
            <div v-if="amount !== 'all'" v-for="post in posts.filter((x, y) => y <= Number(amount))">
                <BlogCard :details="post" />
            </div>
            <div v-if="amount === 'all'" v-for="post in posts">
                <BlogCard :details="post" />
            </div>


        </div>
        <div v-if="!isLoading && posts && posts.length < 1"
            class="max-w-5xl relative bg-base-200 overflow-hidden p-6 w-full mx-auto">
            <Icon name="ph:empty-duotone" size="80" class="mb-4" />
            <h2 class="font-bold   text-3xl md:text-4xl text-base-content/60">Articles in the works...</h2>
            <p class="text-base md:text-lg mt-3 opacity-50">Please check back later for newly published articles!</p>
            <div
                class=" mt-8  p-3 bg-primary/10 text-primary max-sm:flex-col max-sm:items-start flex gap-3 md:w-max items-center-safe">
                <Icon name="ph:info-duotone" />

                <p class="">
                    I post articles, prop firm reviews & coupon codes bi-weekly
                </p>
            </div>
            <div
                class="absolute border-8  size-16 bg-transparent border-primary -bottom-8  hidden md:block  -right-8 rotate-45">
            </div>
            <div
                class="absolute hidden md:block border-2 size-10 bg-transparent border-secondary -bottom-5 -right-5 rotate-45">
            </div>
        </div>
        <div v-if="isLoading" class="  z-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-12">
            <div class="w-full" v-for="post in useRange(0, 2)">
                <div class="w-full h-14 skeleton bg-base-300 lg:bg-base-200"></div>
                <div class="w-full h-8 mt-4 skeleton bg-base-300 lg:bg-base-200"></div>
                <div class="h-[15rem] w-full skeleton bg-base-300 lg:bg-base-200 "></div>
                <div class="w-full h-20 mt-4 skeleton bg-base-300 lg:bg-base-200"></div>
                <div class="mt-4 flex gap-x-3">
                    <div class="w-1/3 h-8  skeleton bg-base-300 lg:bg-base-200"></div>
                    <div class="w-1/3 h-8  skeleton bg-base-300 lg:bg-base-200"></div>
                    <div class="w-1/3 h-8  skeleton bg-base-300 lg:bg-base-200"></div>
                </div>
                <div class="w-full h-2 my-4 skeleton bg-base-300 lg:bg-base-200"></div>
                <div class="mt-4 flex gap-x-3 items-center justify-between">
                    <div class="size-12 rounded-full skeleton bg-base-300 lg:bg-base-200"></div>
                    <div class="w-1/2 mt-4 flex gap-x-3">
                        <div class="w-1/2 h-8  skeleton bg-base-300 lg:bg-base-200"></div>
                        <div class="w-1/2 h-8  skeleton bg-base-300 lg:bg-base-200"></div>
                    </div>
                </div>
            </div>


        </div>
        <div v-if="showMoreButton && !isLoading && posts && posts?.length >= Number(amount)"
            class="mt-12 mx-auto max-w-xs w-full">
            <NuxtLink :to="linkToMore" class=" btn btn-primary btn-block btn-lg   ">View all articles
                <Icon name="ph:arrow-right" />
            </NuxtLink>
        </div>
    </div>
</template>