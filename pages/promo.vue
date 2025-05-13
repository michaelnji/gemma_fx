    <script lang="ts" setup>

</script>
<template>

    <div class="">
        <div class="inset-0 bg-radial-pattern px-6">
            <div class="container mx-auto py-12 md:pt-24">

                <h1 class="font-extrabold text-center text-5xl lg:text-6xl font-display ">
                    Affiliate <span
                        class="bg-clip-text bg-gradient-to-t from-secondary-content via-secondary  to-accent text-transparent ">
                        Promo codes</span>
                </h1>
            </div>
        </div>
        <NuxtErrorBoundary>
            <template #error="{ error, clearError }">
                <ErrorDisplay :error="error" :clear-error="clearError" />
            </template>
            <CouponList />
        </NuxtErrorBoundary>
        <div class="my-12 md:mt-24 xl:mt-48">
            <NewsletterSection />
        </div>

    </div>
</template>
