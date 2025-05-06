<script lang="ts" setup>

</script>
<template>

    <div class="!bg-primary/10 p-6 pt-16 my-12   relative">
        <div class="absolute p-2 rounded-full border-8 border-base-100 -top-4 -left-4 !bg-primary">
            <Icon name="ph:quotes-fill" size="30" class="!text-base-100" />
        </div>
        <!-- <div class="font-bold mt-6 text-3xl">Hint</div> -->
        <div
            class="bg-gradient-to-tl !p-0 !leading-normal !m-0 from-primary via-primary to-primary text-2xl md:text-4xl text-transparent bg-clip-text font-semibold ">
            <slot />
        </div>

    </div>

</template>
