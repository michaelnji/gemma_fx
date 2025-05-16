<script setup lang="ts">
import type { Post } from '~/server/types/blog.type';
import type { ServerResponse, StatusCodes } from 'nexus-req';
import { PortableText } from '@portabletext/vue';
import Hint from '~/components/Hint.vue';
import Quote from '~/components/Quote.vue';
import Gotcha from '~/components/Gotcha.vue';
import CustomHeading from '~/components/CustomHeading.vue';
import BlogImage from '~/components/BlogImage.vue';
import SoftwareBlock from '~/components/SoftwareBlock.vue';
import BlogLink from '~/components/BlogLink.vue';
// import { urlFor } from '~/lib/sanity';
definePageMeta({
    layout: 'blog'
})
const route = useRoute()
const post = ref<Post>()
const isLoading = ref(true)
const authorImgUrl = ref('')
const mainImgUrl = ref('')
onMounted(async () => {
    try {
        const resp = await $fetch<ServerResponse<StatusCodes, Post>>(`/api/articles/${route.params.slug}`)
        if (resp.ok && resp.data) {
            isLoading.value = false
            post.value = resp.data
            const { $urlFor } = useNuxtApp()
            authorImgUrl.value = $urlFor(post.value.authorInfo.imageUrl).format('webp').height(500).width(500).url()
            mainImgUrl.value = $urlFor(post.value.imageUrl).format('webp').quality(100).url()
        }
    } catch (error) {
        throw createError(error as Error)
    }

})
</script>

<template>
    <div class="min-h-screen">
        <div class="inset-0 bg-radial-pattern px-6">
            <div class="container xl:max-w-[85rem] mx-auto pt-12 pb-6">
                <div class="skeleton mb-6 bg-base-200 w-[10rem] h-[2rem]" v-if="isLoading"></div>
                <div v-if="!isLoading && post"
                    class="p-[1px] bg-gradient-to-tl from-primary via-secondary to-success w-max mb-3">

                    <div class=" font-extrabold text-base-100 px-3 py-1 text-base">
                        <!-- <Icon name="ph:users-three-duotone" size="70" /> -->
                        {{ post?.category.title }}


                    </div>
                </div>
                <div class="skeleton mb-3 bg-base-200 w-full h-[6rem]" v-if="isLoading"></div>
                <div class="skeleton   w-full h-[6rem]" v-if="isLoading"></div>
                <h1 v-if="!isLoading && post"
                    class=" lg:text-9xl md:text-8xl  text-6xl !text-pretty font-bold  font-condensed">
                    {{ post?.title }}
                </h1>

                <div
                    class="py-6 w-full mt-3 border-t-4 group-hover:border-base-300 transition-all border-base-300/80 border-dashed  flex flex-wrap items-center lg:gap-12 gap-y-6 gap-x-6">
                    <!-- <div class="skeleton   rounded-full size-10 md:size-12" v-if="isLoading">
                    </div> -->
                    <!-- <div v-if="!isLoading && post" class="avatar">
                        <div class=" w-10 md:w-12 rounded-full border-2 border-stone-50 ">

                            <NuxtImg :src="authorImgUrl" :alt="post.authorInfo.name" :custom="true"
                                v-slot="{ src, isLoaded, imgAttrs }">

                              
                                <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                               
                                <div class="size-10 md:size-12 rounded-full skeleton bg-base-200 "
                                    v-if="!isLoaded">
                                </div>
                            </NuxtImg>
                        </div>
                    </div> -->
                    <div class="skeleton   w-[12rem] h-[2.5rem]" v-if="isLoading"></div>
                    <div v-if="!isLoading && post" class="flex py-1 px-2 bg-base-200 gap-x-3 items-center-safe">
                        <Icon name="ph:calendar-dot-duotone" class="text-primary" />
                        <p class=" md:text-lg">
                            <!-- <NuxtTime :datetime="post.publishedAt" relative numeric="auto" style="long" /> -->
                            <NuxtTime :datetime="post.publishedAt" year="numeric" month="long" day="numeric" />
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2 items-center-safe">
                        <div v-if="!isLoading && post && post.tags" v-for="tag, k in post?.tags">
                            <nuxt-link :to="`/articles?tag=${spacesToDashes(tag.title)}`"><span
                                    class=" badge   bg-stone-800 ">{{
                                        spacesToDashes(tag.title) }}</span></nuxt-link>
                        </div>
                        <div v-for="i in useRange(0, 2)" class="skeleton   w-[4.5rem] h-[2rem]" v-if="isLoading">
                        </div>
                    </div>


                    <!-- <div class=" lg:ml-auto flex gap-x-3 items-center-safe">
                        <div class="flex gap-x-2 items-center">
                            <Icon name="ph:eye-duotone" /> <span
                                class="font-bold font-mono text-sm md:text-base">24.0K</span>
                        </div>
                        <div class="flex gap-x-2 items-center">
                            <Icon name="ph:heart-fill" class="text-primary" /> <span
                                class="font-bold font-mono text-sm md:text-base">2.6K</span>
                        </div>
                    </div> -->
                </div>

            </div>
        </div>
        <div class="lg:pt-12 w-full xl:max-w-[85rem] px-6  mx-auto lg:flex gap-x-12">
            <div class="lg:w-3/5">
                <div class="skeleton   w-full h-[12.5rem] md:h-[25rem]" v-if="isLoading">
                </div>
                <div v-if="!isLoading && post"
                    class="p-[3px] bg-gradient-to-tl from-error via-primary to-success  mb-6">


                    <NuxtImg :src="mainImgUrl" alt="" class="w-full object-contain" :custom="true"
                        v-slot="{ src, isLoaded, imgAttrs }">

                        <!-- Show the actual image when loaded -->
                        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="w-full object-contain">

                        <!-- Show a placeholder while loading -->
                        <div class="skeleton   w-full h-[25rem]" v-if="!isLoaded"></div>
                    </NuxtImg>
                </div>
                <div v-if="isLoading" class="space-y-12 mt-8">
                    <div v-for="i in useRange(0, 2)">
                        <div class="skeleton   w-full h-[5rem]"></div>
                        <div class="mt-6 space-y-4 w-5/6">
                            <div v-for="i in useRange(0, 2)" class="skeleton   w-full h-[2rem]">
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="post" class="text-lg md:text-xl font-semibold  my-6  ">
                    {{ post?.excerpt }}
                </div>
                <div v-if="!isLoading && post" class="mt-8 pt-6 border-t-6 border-dashed border-base-300">
                    <div
                        class="!min-w-full !opacity-100   prose-p:!min-w-full  prose prose-lg md:!prose-xl prose-img:!my-0  prose-invert prose-headings:font-extrabold prose-headings prose-pre:!p-0 prose-pre:whitespace-pre-wrap prose-p:text-pretty prose-pre:!bg-inherit prose-pre:!text-lg md:prose-pre:!text-xl lg:prose-pre:!text-2xl pb-10">
                        <PortableText v-if="post && post.body" :value="post?.body as any[]" :components="{
                            types: {
                                // code: CodeBlock,
                                image: BlogImage,
                                img: BlogImage
                            },
                            marks: {
                                // color: ColorBlock,
                                // code: InlineCodeBlock,
                                link: (props, { slots }) => h(BlogLink, props, slots.default?.()),
                                software: (props) => h(SoftwareBlock, { pt: props.text }),
                                // software: (_, { slots, }) => h(SoftwareBlock, slots.default?.()),
                            },
                            block: {
                                h1: CustomHeading,
                                h2: CustomHeading,
                                h3: CustomHeading,
                                h4: CustomHeading,
                                h5: CustomHeading,
                                h6: CustomHeading,
                                blockquote: Quote,
                                hint: Hint,
                                gotcha: Gotcha,
                            }
                        }" />

                    </div>
                </div>
            </div>
            <div class="lg:w-2/5 mt-12 lg:mt-0 ">
                <div class="sticky top-5">
                    <div v-if="isLoading" class="w-full  h-48 skeleton bg-base-200 "></div>
                    <div v-if="!isLoading && post"
                        class="w-full p-4  border-4 border-base-300 border-dashed text-secondary ">
                        <div class="flex items-center gap-x-4">
                            <div class="avatar">
                                <div class=" size-12  rounded-full border-2 border-stone-50">

                                    <NuxtImg :src="authorImgUrl" :alt="post.authorInfo.name" :custom="true"
                                        v-slot="{ src, isLoaded, imgAttrs }">

                                        <!-- Show the actual image when loaded -->
                                        <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                                        <!-- Show a placeholder while loading -->
                                        <div class="size-12  rounded-full skeleton bg-base-200" v-if="!isLoaded">
                                        </div>
                                    </NuxtImg>
                                </div>
                            </div>
                            <div class="pl-1">
                                <h2 class="font-bold text-3xl font-condensed">
                                    {{ post?.authorInfo.name }}
                                </h2>
                                <span class='text-base-content text-sm'>Blogger, web developer, Trader.</span>
                            </div>
                        </div>
                        <p class="mt-6 text-base  text-base-content/80">


                            <PortableText v-if="post && post.body" :value="post?.authorInfo.bio as any[]" :components="{
                            }" />


                        </p>

                    </div>

                    <NuxtErrorBoundary>
                        <template #error="{ error, clearError }">
                            <ErrorDisplay :error="error" :clear-error="clearError" />
                        </template>
                        <Related v-if="post" :tags="post.tags" :slug="post?.slug.current" />
                    </NuxtErrorBoundary>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.art {
    box-shadow: 2px 2px 0px var(--color-error),
        5px 5px 0px var(--color-success);

}
</style>