    <script lang="ts" setup>
    defineProps<{
        error: Error,
        clearError: () => void
    }>()
</script>
<template>
    <div class="px-3">
        <div class="max-w-xl my-8 relative bg-base-200 overflow-hidden p-6 w-full mx-auto">
            <Icon name="ph:x" size="80" class="mb-4 text-error/60" />
            <h2 class="font-bold font-display  text-3xl md:text-4xl text-error">We're sorry..
            </h2>
            <p class="text-base md:text-lg mt-3 opacity-50">{{
                getHumanFriendlyErrorMessage(error.message)
                }}</p>
            <div class="px-6 py-2 text-error bg-error/10 mt-4  w-full ">
                <p class="  line-clamp-1     font-mono sm:text-sm text-xs font-extrabold">
                    {{ error.message }}
                </p>
            </div>
            <button class="btn w-full items-center btn-error  mt-12" @click="clearError()">
                Reload
                <Icon name="solar:refresh-bold" size="20" />
            </button>


        </div>
    </div>
</template>
