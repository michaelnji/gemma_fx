<script lang="ts" setup>
const activeFilter = ref<'popular' | 'top-liked'>('popular')
</script>
<template>
    <div class=" py-12 px-3 md:px-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
            <h2 class="font-bold @max-xs:text-xl  max-[20rem]:text-2xl text-4xl">
                <span class="text-primary">Featured</span> <span class="text-base-content/50">Posts</span>
            </h2>
            <!-- <div class="flex items-center gap-2">
                <button @click="() => activeFilter = 'popular'"
                    class="text-base-content/50 hover:text-base-content/90 transition duration-300 text-base md:text-lg"
                    :class="{ '!text-primary': activeFilter === 'popular' }">[Popular]</button>
                <button @click="() => activeFilter = 'top-liked'"
                    class="text-base-content/50 hover:text-base-content/90 transition duration-300 text-base md:text-lg"
                    :class="{ '!text-primary': activeFilter === 'top-liked' }">[Top Liked]</button>
            </div> -->
        </div>
        <!-- Articles -->
        <ArticleList linkToMore="/articles?category=Featured" :amount="20" category="Featured" post_type="Article"
            :show-more-button="true" class="md:mt-12 mt-6" />
    </div>
</template>
