<script lang="ts" setup>

</script>
<template>

    <div class="!bg-warning/10 p-6 pt-16 my-12   relative">
        <div class="absolute p-2 rounded-full border-8 border-base-100 -top-4 -left-4 !bg-warning">
            <Icon name="ph:warning-fill" size="30" class="!text-base-100" />
        </div>
        <!-- <div class="font-bold mt-6 text-3xl">Hint</div> -->
        <div
            class="bg-gradient-to-tl !p-0 !leading-normal !m-0 from-warning via-warning to-warning text-transparent bg-clip-text font-semibold ">
            <slot />
        </div>

    </div>

</template>
