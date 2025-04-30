<!-- homepage (you can delete this page to start your project) -->
<script lang="ts" setup>
import PropReviewSection from '~/components/PropReviewSection.vue';


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
        <div class="z-0">
            <div class="sticky z-10 top-0 border-b border-stone-700/60">
                <CategoryBar :tab="activeCategory" @category-change="(e) => activeCategory = e" />
            </div>
            <div class="">
                <!-- Featured posts -->
                <SectionsFeatured v-if="activeCategory === 'featured'" />
                <!-- Market analysis
                <SectionsAnalysis v-if="activeCategory === 'analysis'" /> -->
                <!--Rookies -->
                <SectionsRookies v-if="activeCategory === 'rookies'" />
                <!--Software -->
                <SectionsSoftware v-if="activeCategory === 'software'" />
                <!--Tools -->
                <SectionsTools v-if="activeCategory === 'tools'" />
            </div>
        </div>
        <div class="md:space-y-48 space-y-24 mt-12 md:mt-24 xl:mt-48">
            <PropReviewSection />
            <CouponCodeSection />
            <Stats />
            <NewsletterSection class="mb-12" />
        </div>
    </div>
</template>
