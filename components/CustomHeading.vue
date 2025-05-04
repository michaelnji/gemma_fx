<script lang="ts" setup>
import type { PortableTextComponentProps } from '@portabletext/vue';

const props = defineProps<
    PortableTextComponentProps<{
        style: string;
    }>
>();
const style = computed(() => props.value.style)
</script>
<template>
    <div>
        <h2 v-if="style === 'h2'" class="   font-bold text-5xl md:text-7xl">
            <slot></slot>
        </h2>
        <h3 v-if="style === 'h3'" class="   font-bold text-5xl md:text-6xl">
            <slot></slot>
        </h3>
        <h4 v-if="style === 'h4'" class=" font-bold text-3xl md:text-4xl">
            <slot></slot>
        </h4>
    </div>
</template>
