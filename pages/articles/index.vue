    <script lang="ts" setup>
    import { animate, utils } from 'animejs';
    import type { Post, Tag } from '~/server/types/blog.type';
    import type { ServerResponse, StatusCode } from '~/server/types/index.types';
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
                duration: 500, // Adjust as needed
                easing: 'easeInOutQuad', // Choose your preferred easing function
                complete: () => {
                    TagsListElement.style.height = 'auto'; // Set back to auto after animation
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
            const tagResp = await $fetch<ServerResponse<StatusCode, Tag[]>>('/api/articles/tags')
            const postsResp = await $fetch<ServerResponse<StatusCode, Post[]>>('/api/articles/fetch')
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
    <div class="border-t border-t-stone-800">
        <!-- <div class="inset-0 bg-radial-pattern">
            <div class="container mx-auto py-6 md:pt-12">
                <h1 class="text-5xl font-bold font-display text-center">
                    Articles
                </h1>
            </div>
        </div> -->
        <!-- settings + blog posts -->
        <NuxtErrorBoundary>
            <template #error="{ error, clearError }">
                <ErrorDisplay :error="error" :clear-error="clearError" />
            </template>
            <ArticleListDetailed />
        </NuxtErrorBoundary>

        <div class="my-12 md:mt-24 xl:mt-48">
            <NewsletterSection />
        </div>
    </div>
</template>
