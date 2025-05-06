<script lang="ts" setup>
useHead({
    titleTemplate: 'GemmaFx - %s',
})
</script>
<template>
    <div class=" !max-w-screen overflow-x-clip   bg-base-100 relative">
        <Navbar class="!z-2" />
        <div class="">
            <slot></slot>
        </div>
        <div class="pt-12">
            <Footer />

        </div>
    </div>
</template>
