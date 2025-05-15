    <script lang="ts" setup>
    // import { urlFor } from '~/lib/sanity';
    import type { Post } from '~/server/types/blog.type';

    const props = defineProps<{
        details: Post
    }>();
</script>
<template>
    <nuxt-link :to="`/articles/${details.slug.current}`">
        <div class=" w-full  text-primary-content">
            <div class=" bg-base-300 ">
                <div
                    class=" w-full border-5  border-base-300 duration-300 cursor-pointer  transition-all md:hover:-translate-3 -translate-2  group ">
                    <div
                        class="p-3 bg-base-200 text-base-content border-b-4 border-base-300 flex justify-between items-center gap-x-2">
                        <!-- <h2 class="font-condensed  text-2xl">
                            {{ details.post_type.title }}
                        </h2> -->
                        <span
                            class="badge badge-primary border border-primary-content font-bold text-sm  transition-all flex items-center gap-x-2"
                            :class="{ '!badge-success': details.category.title.toLowerCase() === 'featured' }">
                            <Icon name="ph:book-duotone" size="18" />
                            {{ details.category.title }}
                        </span>
                        <NuxtTime :datetime="details.publishedAt" year="numeric" month="long" day="numeric"
                            class="font-bold" />
                    </div>
                    <div class=" bg-base-100   text-base-content">
                        <NuxtImg :src="$urlFor(details.imageUrl).format('webp').height(700).width(1400).url()"
                            class="mb-3" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">

                            <!-- Show the actual image when loaded -->
                            <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                            <!-- Show a placeholder while loading -->
                            <div class="h-[17.5rem] w-full skeleton bg-base-300 lg:bg-base-200 " v-if="!isLoaded">
                            </div>
                        </NuxtImg>
                        <div class="p-6 border-t border-stone-800">
                            <h2 class=" font-display  text-pretty text-2xl">
                                {{ details.title }}
                            </h2>
                            <p class="mt-3 text-base/normal line-clamp-2 opacity-80">
                                {{ details.excerpt }}
                            </p>

                            <div class="flex py-3 mt-3 justify-between items-center gap-x-2">

                                <div class="flex flex-wrap gap-1  items-center">
                                    <div v-for="tag, k in details.tags">
                                        <span v-if="k < 2" class=" badge-sm badge font-bold sm:badge-md bg-base-300 ">{{
                                            tag.title }}</span>
                                    </div>
                                    <span v-if="details.tags.length > 2"
                                        class="  badge-sm badge font-bold sm:badge-md bg-base-300 ">+{{
                                        details.tags.length -
                                        2
                                        }}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        class="p-6 border-t-4 group-hover:border-base-300 transition-all border-base-300/80 border-dashed bg-base-100 text-base-content flex items-center justify-between gap-x-3">
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class=" w-8 rounded-full">

                                    <NuxtImg
                                        :src="$urlFor(details.authorInfo.imageUrl).format('webp').height(500).width(500).url()"
                                        :custom="true" v-slot="{ src, isLoaded, imgAttrs }">

                                        <!-- Show the actual image when loaded -->
                                        <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

                                        <!-- Show a placeholder while loading -->
                                        <div class="size-12 rounded-full skeleton bg-base-300 lg:bg-base-200 "
                                            v-if="!isLoaded">
                                        </div>
                                    </NuxtImg>
                                </div>
                            </div>
                            <span class="text-base font-bold font-display text-secondary">{{ details.authorInfo.name
                                }}</span>
                        </div>
                        <!-- <div class="flex gap-x-3 items-center-safe">
                            <div class="flex gap-x-2 items-center">
                                <Icon name="ph:eye-duotone" /> <span class="font-bold">24.0K</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <Icon name="ph:heart-fill" class="text-primary" /> <span
                                    class="font-bold">2.6K</span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
<style>
.sh-badge {
    box-shadow: 2px 2px var(--color-primary-content);
}

.group:hover .sh-badge {
    box-shadow: 5px 5px var(--color-primary-content);

}
</style>