<script lang="ts" setup>
import '~/assets/css/custom.css';
const showCursor = ref(false)
onMounted(() => {
  showCursor.value = true
})

</script>
<template>
  <div class=" cursor-bounds !font-medium text-base" data-theme="gemma">
    <NuxtLoadingIndicator color="oklch(87% 0.169 91.605)" />
    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
<style></style>