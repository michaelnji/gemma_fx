<script lang="ts" setup>
useHead({
    titleTemplate: 'Article - %s',
})
</script>
<template>
    <div class=" !max-w-screen  !overflow-x-clip   bg-base-100 relative">
        <Navbar class="!z-2" />
        <NuxtErrorBoundary>
            <template #error="{ error, clearError }">
                <div class="h-screen md:place-content-center p-6">
                    <ErrorDisplay :error="error" :clear-error="clearError" />
                </div>
            </template>
            <div class="">
                <slot></slot>
            </div>
        </NuxtErrorBoundary>
        <div class="pt-12">
            <Footer />
        </div>
    </div>
</template>
