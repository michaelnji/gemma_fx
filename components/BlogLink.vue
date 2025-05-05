<script lang="ts" setup>
import type { PortableTextMarkComponentProps } from '@portabletext/vue';

const props = defineProps<PortableTextMarkComponentProps<{
    _type: string;
    _key?: string;
    href: string
    text: string
}>>();

</script>

<template>
    <span>
        <NuxtLink :to="value?.href ?? '/'" class='bg-gradient-to-r from-secondary via-primary to-error transition-all
             inline text-transparent bg-clip-text
            font-bold border-b-2 border-primary hover:from-error hover:via-secondary hover:to-primary
             border-dashed 
 group leading-tight !p-0'>
            <slot></slot> <small class="rotate-3"> » </small>
        </NuxtLink>
    </span>
</template>