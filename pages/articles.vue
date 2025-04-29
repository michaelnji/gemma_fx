    <script lang="ts" setup>
    import { animate, utils } from 'animejs';
    const forexTags: string[] = [
        "forex",
        "trading",
        "currency",
        "market",
        "analysis",
        "technical analysis",
        "fundamental analysis",
        "price action",
        "indicators",
        "chart patterns",
        "risk management",
        "trading strategy",
        "day trading",
        "swing trading",
        "position trading",
        "broker",
        "leverage",
        "pip",
        "spread",
        "volatility",
        "economic calendar",
        "central bank",
        "interest rates",
        "currency pairs",
        "metaTrader"
    ];
    const taglistIsAnimating = ref(false)
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
    function toggleTagList() {
        if (taglistIsOpen.value) {
            closeTagList()
            return
        }
        openTagList()
        return
    }
    const TagListToggler = useTemplateRef<HTMLElement>('tags-container')
    // closes menu on click outside of menu
    onClickOutside(TagListToggler, event => {
        if (taglistIsOpen.value) {
            taglistIsOpen.value = !taglistIsOpen.value
            closeTagList()
        }
    })
</script>
<template>
    <div class="">
        <div class="inset-0 bg-radial-pattern">
            <div class="container mx-auto py-12 md:py-24">
                <h1 class="text-7xl font-display text-center">
                    Articles
                </h1>
            </div>
        </div>
        <!-- settings + blog posts -->
        <div>
            <div class=" sticky -z-0 top-0">
                <div class="px-3 py-2 bg-base-100 border-b border-stone-700/80 flex gap-2">

                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-soft max-sm:btn-sm m-1">Sort by
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
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-soft max-sm:btn-sm m-1">Topics
                            <Icon name="solar:alt-arrow-down-linear" />
                        </div>
                        <ul tabindex="0"
                            class="dropdown-content menu border border-base-300 rounded-box bg-base-200 z-1 w-52 p-2 shadow-sm">
                            <li>
                                <div class="flex items-center-safe gap-x-2 justify-between">
                                    <span>Featured</span>
                                    <Icon name="ph:star-duotone" size="18" />

                                </div>
                            </li>

                            <li>
                                <div class="flex items-center-safe gap-x-2 justify-between">
                                    <span>Novice</span>
                                    <Icon name="ph:baby-duotone" size="18" />
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center-safe gap-x-2 justify-between">
                                    <span>Software</span>
                                    <Icon name="ph:laptop-duotone" size="18" />

                                </div>
                            </li>
                            <li>
                                <div class="flex items-center-safe gap-x-2 justify-between">
                                    <span>tools</span>
                                    <Icon name="ph:wrench-duotone" size="18" />

                                </div>
                            </li>
                        </ul>
                    </div>
                    <button ref="tags-container" :disabled="taglistIsOpen" @click="() => openTagList()"
                        class="btn disabled:!cursor-pointer  max-sm:btn-sm"
                        :class="{ '!btn-neutral !btn-outline hover:!bg-transparent active:!bg-transparent focus:!bg-transparent !text-neutral !shadow-none': taglistIsOpen, '!btn-ghost': !taglistIsOpen }">
                        Tags <span class="badge badge-xs badge-primary">3</span>
                    </button>
                    <button class="btn btn-outline  ml-auto hidden md:inline-flex btn-sm">
                        Reset
                        <Icon name="ph:x-duotone" size="18" />
                    </button>
                </div>
                <div ref="tags-container" style="height:0;"
                    class=" tagslist !px-3  bg-base-100 !border-stone-700/80 flex flex-wrap gap-4 max-h-[60vh] md:max-h-xs md:overflow-y-hidden overflow-y-scroll h-max">
                    <button class="btn bg-stone-700/30 btn-md font-medium  " v-for="tag in forexTags">
                        {{ tag }}
                    </button>
                </div>
            </div>
            <!-- articles -->
            <div class="p-3 pt-6">
                <ArticleList />
            </div>
        </div>

    </div>
</template>
