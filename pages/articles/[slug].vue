<script setup lang="ts">
import type { Post } from '~/server/types/blog.type';
import type { ServerResponse, StatusCode } from '~/server/types/index.types';

const route = useRoute()
onMounted(async () => {
    const resp = await $fetch<ServerResponse<StatusCode, Post>>(`/api/articles/${route.params.slug}`)
    if (resp.ok) console.log(resp.data)

})
</script>

<template>
    <div>

    </div>
</template>
