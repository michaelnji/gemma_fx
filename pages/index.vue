<!-- homepage (you can delete this page to start your project) -->
<script lang="ts" setup>
import PropReviewSection from '~/components/PropReviewSection.vue';
useSeoMeta({
    title: 'Your trusted resource for forex trading excellence',
    description: 'Technical analysis, fundamentals, psychology, I write bi-weekly articles helping you progress as a trader. Get honest reviews of prop firms and exclusive discounts.',
    ogTitle: 'Your trusted resource for forex trading excellence',
    ogDescription: 'Technical analysis, fundamentals, psychology, I write bi-weekly articles helping you progress as a trader. Get honest reviews of prop firms and exclusive discounts.',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',

})

definePageMeta({
    layout: 'default'
})
const activeCategory = ref('featured')
</script>

<template>
    <div class="w-full pt-6 md:pt-12">
        <!-- <div class=" inset-0 bg-radial-pattern">
            <Hero />

            <div class="h-max">
                <ShapesWave />
            </div>
        </div>
        <Banner /> -->
        <div class="z-0">
            <div class="sticky !z-10 top-0 bg-base-100 border-b border-t border-stone-700/60">
                <CategoryBar :tab="activeCategory" @category-change="(e) => activeCategory = e" />
            </div>
            <div class="lg:px-16">
                <NuxtErrorBoundary>
                    <!-- You use the default slot to render your content -->
                    <template #error="{ error, clearError }">
                        <ErrorDisplay :error="error" :clear-error="clearError" />
                    </template>
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
                </NuxtErrorBoundary>
            </div>
        </div>
        <div class="md:space-y-56 space-y-24 mt-12 md:mt-24 xl:mt-48">
            <PropReviewSection />
            <CouponCodeSection />
            <!-- <Stats /> -->
            <NewsletterSection class="mb-12" />
        </div>
    </div>
</template>
