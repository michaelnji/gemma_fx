    <script lang="ts" setup>
    import type { PortableTextComponentProps } from '@portabletext/vue';

    const props = defineProps<
        PortableTextComponentProps<{
            asset: { _ref: string }
        }>
    >();
    const imgUrl = computed(() => {
        if (props.value.asset._ref) return `https://cdn.sanity.io/images/${useRuntimeConfig().public.sanity.projectId}/production/${props.value.asset._ref.split('image-')[1].replace('-png', '.png')}`
    })

</script>
<template>
    <div class="bg-base-300 !my-12">
        <div class="p-[3px]  border-primary/70 border-dashed  bg-base-100 -translate-2">
            <img :src="imgUrl" alt="" class="w-full ">
        </div>
    </div>
</template>
