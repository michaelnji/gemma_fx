<script lang="ts" setup>
const activeFilter = ref<'popular' | 'top-liked'>('popular')
</script>
<template>
    <div class=" py-8 px-4 md:px-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
            <h2 class="font-dsiplay font-bold @max-xs:text-xl   text-2xl">
                <span class="">Trading</span> <span class="text-base-content/50">Tools</span>
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
        <ArticleList linkToMore="/articles?category=Toolseatured" :amount="20" category="Tools" post_type="Article"
            :show-more-button="true" class=" mt-8" />
    </div>
</template>
