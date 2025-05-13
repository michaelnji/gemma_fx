<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

defineProps<{
    code: string | null
}>()
// const source = ref('container')
const { text, copy, copied, isSupported } = useClipboard()
</script>
<template>
    <span class=" py-1 px-3 text-base bg-primary/10 text-primary uppercase flex items-center  font-bold gap-x-3 w-max">
        {{ code ?? "N/A" }}
        <Icon v-if="code && isSupported && !copied" name="ph:copy-simple-duotone" @click="copy(code)"
            class="cursor-pointer " />
        <Icon v-if="copied" name="ph:check-bold" class="disabled" />
    </span>
</template>
