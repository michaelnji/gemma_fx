<!-- custom solution for NuxtErrorBoundary bug. src: https://github.com/nuxt/nuxt/issues/15781 -->
<script setup lang="ts">
const error = ref<Error>()

function clearError() {
    error.value = undefined
}

onErrorCaptured(err => {
    error.value = err
    return false
})

const route = useRoute()
watch(
    () => route.fullPath,
    () => {
        error.value = undefined
    },
)
</script>

<template>
    <slot v-if="!error" />
    <slot v-else name="error" :error="error" :clear-error="clearError" />
</template>