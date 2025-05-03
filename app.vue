<script lang="ts" setup>
import '~/assets/css/custom.css';
const showCursor = ref(false)
onMounted(() => {
  showCursor.value = true
})
</script>
<template>
  <div class=" cursor-bounds !font-medium text-base" data-theme="gemma">

    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
<style></style>