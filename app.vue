<script lang="ts" setup>
import '~/assets/css/custom.css';
const showCursor = ref(false)
onMounted(() => {
  showCursor.value = true
})
</script>
<template>
  <div class=" cursor-bounds w-screen !overflow-x-hidden h-screen " data-theme="gemma">

    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
