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
        <CategoryBar :tab="activeCategory" @category-change="(e) => activeCategory = e" />
    </div>
</template>
