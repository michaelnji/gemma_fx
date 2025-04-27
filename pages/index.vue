<!-- homepage (you can delete this page to start your project) -->
<script lang="ts" setup>

definePageMeta({
    layout: 'default'
})
const activeCategory = ref('featured')
</script>

<template>
    <div class="w-full pt-6">
        <div class=" inset-0 bg-radial-pattern">
            <Hero />

            <div class="h-max">
                <ShapesWave />
            </div>
        </div>
        <Banner />
        <div class="sticky top-0 border-b border-stone-700/60">
            <CategoryBar :tab="activeCategory" @category-change="(e) => activeCategory = e" />
        </div>
        <div class=" min-h-screen">
            <!-- Featured posts -->
            <SectionsFeatured v-if="activeCategory === 'featured'" />
            <!--Market analysis -->
            <SectionsAnalysis v-if="activeCategory === 'analysis'" />
            <!--Rookies -->
            <SectionsRookies v-if="activeCategory === 'rookies'" />
            <!--Software -->
            <SectionsSoftware v-if="activeCategory === 'software'" />
            <!--Tools -->
            <SectionsTools v-if="activeCategory === 'tools'" />
        </div>
    </div>
</template>
