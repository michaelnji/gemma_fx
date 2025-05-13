<script lang="ts" setup>
import { animate, utils } from 'animejs';
import type { Post, Tag } from '~/server/types/blog.type';
import type { StatusCodes, ServerResponse } from 'nexus-req'

const route = useRoute()
const tags = ref<Tag[]>()
const posts = ref<Post[]>()
// filters
const currentTopic = ref<string>('all')
const currentTag = ref<string>('all')
currentTag.value = route.query.tag ? route.query.tag.toString() ?? 'all' : 'all'
currentTopic.value = route.query.topic ? route.query.topic.toString() ?? 'all' : 'all'
// filters posts
const processedPosts = computed(() => {
    if (posts.value) {
        if (currentTag.value === 'all' && currentTopic.value === 'all') return posts.value
        if (currentTag.value === 'all') {
            return posts.value.filter((x) => x.category.title === currentTopic.value)
        }
        if (currentTopic.value === 'all') {
            return posts.value.filter((x) => x.tags.find((x) => x.title === currentTag.value))
        }
        return posts.value.filter((x) => x.tags.find((x) => x.title === currentTag.value) && x.category.title === currentTopic.value)
    }
})
const taglistIsAnimating = ref(false)
const isLoading = ref(true)
const taglistIsOpen = ref(false)
function openTagList() {
    taglistIsAnimating.value = true
    const TagsListElement = utils.$('.tagslist')[0]
    TagsListElement.style.paddingTop = '16px'
    TagsListElement.style.paddingBottom = '16px'
    const initialHeight = TagsListElement.clientHeight;
    TagsListElement.style.height = 'auto';
    const fullHeight = TagsListElement.clientHeight;
    TagsListElement.style.height = `${initialHeight}px`; // Reset to initial height (or 0 if collapsed)
    animate(
        TagsListElement,
        {

            borderBottom: ' 1rem 0',
            height: fullHeight,
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => {
                TagsListElement.style.height = 'auto';
                taglistIsAnimating.value = false
                taglistIsOpen.value = true

            }
        });

}
function closeTagList() {
    taglistIsAnimating.value = true
    const TagsListElement = utils.$('.tagslist')[0]

    animate(
        TagsListElement,
        {

            borderBottom: ' 0px 0',
            height: 0,
            paddingTop: '0',
            paddingBottom: '0',
            duration: 500, // Adjust as needed
            easing: 'easeInOutQuad', // Choose your preferred easing function
            complete: () => {

                taglistIsAnimating.value = false
                taglistIsOpen.value = false

            }
        });

}

const TagListToggler = useTemplateRef<HTMLElement>('tags-container')
// closes menu on click outside of menu
onClickOutside(TagListToggler, event => {
    if (taglistIsOpen.value) {
        taglistIsOpen.value = !taglistIsOpen.value
        closeTagList()
    }
})
onMounted(async () => {
    try {


        isLoading.value = true
        const tagResp = await $fetch<ServerResponse<StatusCodes, Tag[]>>('/api/articles/tags')
        const postsResp = await $fetch<ServerResponse<StatusCodes, Post[]>>('/api/articles/fetch')
        if (tagResp.ok && tagResp.data) {

            tags.value = tagResp.data
        }
        if (postsResp.ok && postsResp.data) {
            posts.value = postsResp.data
        }
        isLoading.value = false


    } catch (error) {
        throw createError(`${error}`)
    }
})
</script>
<template>
    <div>
        <div class=" sticky z-1 top-0">
            <div class=" py-3 bg-base-100 border-b border-stone-700/80 flex gap-2 items-center px-3 ">

                <div class="dropdown group">
                    <div tabindex="0" role="button"
                        class="py-2  bg-base-200 text-sm font-bold w-max flex items-center hover:bg-base-300 group-focus-within:bg-base-300  transition-all cursor-pointer !px-3 gap-x-1 ">
                        Sort by
                        <Icon name="solar:alt-arrow-down-linear" />
                    </div>
                    <ul tabindex="0"
                        class="dropdown-content menu border border-base-300 rounded-box bg-base-200 z-1 w-52 p-2 shadow-sm">
                        <li>
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Date Added</span>
                                <Icon name="ph:arrow-down" size="18" />
                            </div>
                        </li>
                        <li><span>Author</span></li>
                        <li>
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Views</span>
                                <Icon name="ph:arrow-down" size="18" />
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Likes</span>
                                <Icon name="ph:arrow-down" size="18" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="dropdown group">
                    <div class="indicator">
                        <div tabindex="0" role="button"
                            class="py-2  bg-base-200 text-sm font-bold w-max flex items-center hover:bg-base-300 group-focus-within:bg-base-300  transition-all cursor-pointer !px-3 gap-x-1 ">
                            Topics
                            <span v-if="currentTopic !== 'all'"
                                class="  indicator-item indicator-top bg-primary size-3  badge-primary font-bold rounded-full"></span>
                            <Icon name="solar:alt-arrow-down-linear" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="dropdown-content gap-2 menu border border-base-300 rounded-box bg-base-200 z-1 w-52 p-2 shadow-sm">
                        <li :class="{ '!bg-primary/10 !text-primary': currentTopic === 'all' }" @click="() => {
                            if (currentTopic !== 'all') currentTopic = 'all'

                        }">
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>All topics</span>
                                <Icon name="ph:book-duotone" size="18" />

                            </div>
                        </li>
                        <li :class="{ '!bg-primary/10 !text-primary': currentTopic === 'Featured' }" @click="() => {
                            currentTopic = 'Featured'

                        }">
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Featured</span>
                                <Icon name="ph:star-duotone" size="18" />

                            </div>
                        </li>

                        <li :class="{ '!bg-primary/10 !text-primary': currentTopic === 'Novice' }" @click="() => {
                            currentTopic = 'Novice'

                        }">
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Novice</span>
                                <Icon name="ph:baby-duotone" size="18" />
                            </div>
                        </li>
                        <li :class="{ '!bg-primary/10 !text-primary': currentTopic === 'Software' }" @click="() => {
                            currentTopic = 'Software'

                        }">
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Software</span>
                                <Icon name="ph:laptop-duotone" size="18" />

                            </div>
                        </li>
                        <li :class="{ '!bg-primary/10 !text-primary': currentTopic === 'Tools' }" @click="() => {
                            currentTopic = 'Tools'

                        }">
                            <div class="flex items-center-safe gap-x-2 justify-between">
                                <span>Tools</span>
                                <Icon name="ph:wrench-duotone" size="18" />

                            </div>
                        </li>
                    </ul>
                </div>
                <div class="indicator">
                    <button ref="tags-container" :disabled="taglistIsOpen" @click="() => openTagList()"
                        class="py-2  bg-base-200 text-sm font-bold w-max flex items-center hover:bg-base-300    transition-all cursor-pointer !px-3 gap-x-1 disabled:!bg-base-300">
                        Tags
                        <Icon name="ph:tag-duotone" size="18" />
                        <span v-if="currentTag !== 'all'"
                            class="  indicator-item indicator-top bg-primary size-3  badge-primary font-bold rounded-full"></span>
                    </button>
                </div>
                <button @click="() => {
                    currentTag = 'all'
                    currentTopic = 'all'
                }" class="btn btn-outline  ml-auto hidden sm:inline-flex btn-sm">
                    Reset
                    <Icon name="ph:x-duotone" size="18" />
                </button>
            </div>
            <div v-if="tags" ref="tags-container" style="height:0;"
                class=" tagslist !px-3  bg-base-100 !border-stone-700/80 flex flex-wrap gap-4 max-h-[60vh] md:max-h-xs md:overflow-y-hidden overflow-y-scroll h-max">
                <button @click="() => {
                    currentTag = tag.title
                    closeTagList()
                }" class="btn bg-stone-700/30 font-bold capitalize  "
                    :class="{ '!bg-primary/10 !text-primary': currentTag === tag.title }"
                    v-for="tag in [{ title: 'all' }, ...tags]">
                    {{ tag.title }}
                </button>
            </div>
        </div>
        <!-- articles -->
        <div class="p-3 pt-12">
            <div class=" transition-all">
                <div v-if="processedPosts && processedPosts.length >= 1 && !isLoading"
                    class=" pl-3 z-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">

                    <div v-for="post in processedPosts">
                        <BlogCard :details="post" />
                    </div>


                </div>
                <div v-if="!isLoading && !processedPosts || processedPosts && processedPosts.length < 1"
                    class="max-w-5xl relative bg-base-200 overflow-hidden p-6 w-full mx-auto">
                    <Icon name="ph:empty-duotone" size="80" class="mb-4" />
                    <h2 class="font-bold  text-3xl md:text-5xl text-base-content/60">Articles in the works...</h2>
                    <p class="text-lg md:text-xl mt-3 opacity-50">Please check back later for newly published
                        articles!</p>
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
                        <div class="w-full h-14 skeleton"></div>
                        <div class="w-full h-8 mt-4 skeleton"></div>
                        <div class="h-[15rem] w-full skeleton "></div>
                        <div class="w-full h-20 mt-4 skeleton"></div>
                        <div class="mt-4 flex gap-x-3">
                            <div class="w-1/3 h-8  skeleton"></div>
                            <div class="w-1/3 h-8  skeleton"></div>
                            <div class="w-1/3 h-8  skeleton"></div>
                        </div>
                        <div class="w-full h-2 my-4 skeleton"></div>
                        <div class="mt-4 flex gap-x-3 items-center justify-between">
                            <div class="size-12 rounded-full skeleton"></div>
                            <div class="w-1/2 mt-4 flex gap-x-3">
                                <div class="w-1/2 h-8  skeleton"></div>
                                <div class="w-1/2 h-8  skeleton"></div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>
